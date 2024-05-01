import { Octokit } from "octokit";

const handler = async (req, res) => {
    const token = req.body.token;
    const title = req.body.title;
    const desc = req.body.desc;
    const repoowner = req.body.owner;
    const reponame = req.body.reponame;
    const octokit = new Octokit({
        auth: token,
    });
    const response = await octokit.request(
        "POST /repos/{owner}/{repo}/issues",
        {
            owner: repoowner,
            repo: reponame,
            title: title,
            body: desc,
        }
    );
    res.json(response);
};
export default handler;
