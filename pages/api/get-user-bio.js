import { Octokit } from "octokit";

const handler = async (req, res) => {
    const access_token = req.body.token;
    const octokit = new Octokit({
        auth: access_token,
    });
     res.json(await octokit.rest.users.getAuthenticated());
   
};

export default handler;