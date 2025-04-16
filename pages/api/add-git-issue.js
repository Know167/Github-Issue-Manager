import { Octokit } from "octokit";

const handler = async (req, res) => {
    try {
        if (
            !req.body.token ||
            !req.body.title ||
            !req.body.owner ||
            !req.body.reponame
        ) {
            return res.status(400).json({ error: "Missing required fields" });
        }
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
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export default handler;
