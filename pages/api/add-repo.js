import { Octokit } from "octokit"

const handler = async(req, res) => {
    const repoName=req.body.name
    const repoDescription=req.body.desc
    const repoPrivacy = req.body.privacy
    const token = req.body.token
    
    const octokit = new Octokit({
        auth: token,
    })

    const response=await octokit.request('POST /user/repos', {
        name: repoName,
        description: repoDescription,
        'private': repoPrivacy,
    })
    res.status(response.status).json(response)
}

export default handler;