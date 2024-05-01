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
        console.log(err);
    }
};

export default handler;
