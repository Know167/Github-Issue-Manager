import { Octokit } from "octokit";

const handler = async (req, res) => {
    const token = req.body.token;
    const tree = req.body.tree;
    const owner = req.body.owner;
    const reponame = req.body.reponame;
    const sha = req.body.sha;
    const octokit = new Octokit({
        auth: token,
    });

    const response = await octokit.request(
        "PUT /repos/{owner}/{repo}/contents/{path}",
        {
            owner: owner,
            repo: reponame,
            path: "data.json",
            message: "blabla1",
            content: Buffer.from(JSON.stringify(tree)).toString("base64"),
            sha: sha,
        }
    );
    return res.status(response.status).json(response);
};

export default handler;
