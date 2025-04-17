import { Octokit } from "octokit";

const handler = async (req, res) => {
    const token = req.body.token;
    const reponame = req.body.reponame;
    const owner = req.body.owner;
    const octokit = new Octokit({
        auth: token,
    });

    try {
        const {
            data: { content, sha },
        } = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
            owner: owner,
            repo: reponame,
            path: "data.json",
        });
        const resData = JSON.parse(
            Buffer.from(content, "base64").toString("ascii")
        );

        return res.json({ resData, sha });
    } catch (err) {
        console.log("Error fetching data.json", err);
        try {
            const issuesResponse = await octokit.request(
                "GET /repos/{owner}/{repo}/issues",
                {
                    owner: owner,
                    repo: reponame,
                    state: "all",
                    per_page: 100,
                }
            );
            const issues = issuesResponse.data;
            const defaultTree = {
                id: "root",
                title: reponame,
                desc: "",
                child: issues.map((issue) => ({
                    id: issue.id,
                    title: issue.title,
                    desc: issue.body || "",
                    child: [],
                })),
            };
            return res.json({ resData: defaultTree, sha: null });
        } catch (error) {
            console.log("Error fetching issues", error);
            return res.status(500).json({ message: "Error fetching issues" });
        }
    }
};

export default handler;
