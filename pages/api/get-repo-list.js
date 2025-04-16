import { Octokit } from "octokit";

const handler = async (req, res) => {
    const access_token = req.body.token;

    const octokit = new Octokit({
        auth: access_token,
    });

    async function getPaginatedData(url) {
        const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
        let pagesRemaining = true;
        let list = [];

        while (pagesRemaining) {
            const response = await octokit.request(`GET ${url}`, {
                per_page: 10,
            });

            const parsedData = parseData(response.data);
            list = [...list, ...parsedData];

            const linkHeader = response.headers.link;

            pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`);

            if (pagesRemaining) {
                url = linkHeader.match(nextPattern)[0];
                console.log(url);
            }
        }
        return list;
    }

    function parseData(resData) {
        // If the data is an array, return that
        if (Array.isArray(resData)) {
            return resData;
        }

        // Some endpoints respond with 204 No Content instead of empty array
        //   when there is no data. In that case, return an empty array.
        if (!resData) {
            return [];
        }

        // Otherwise, the array of items that we want is in an object
        // Delete keys that don't include the array of items
        delete resData.incomplete_results;
        delete resData.repository_selection;
        delete resData.total_count;
        // Pull out the array of items
        const namespaceKey = Object.keys(resData)[0];
        resData = resData[namespaceKey];

        return resData;
    }

    try {
        const repoList = await getPaginatedData("/user/repos");
        if (Array.isArray(repoList)) {
            res.status(200).json(repoList);
        }
    } catch (err) {
        console.log("Error getting the repositories", err);
    }
};

export default handler;
