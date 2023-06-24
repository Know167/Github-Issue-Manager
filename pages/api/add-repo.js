import { Octokit } from "octokit"

const handler = async(req, res) => {
    const repoName=req.body.name
    const repoDescription=req.body.desc
    const repoPrivacy = req.body.privacy
    const token = req.body.token
    console.log('req body received for adding repo:')
    console.log(req.body);
    const octokit = new Octokit({
        auth: token,
    })

    const response=await octokit.request('POST /user/repos', {
        name: repoName,
        description: repoDescription,
        'private': repoPrivacy,
    })
    console.log('response of trying to create new rpo:'+response.status);
    res.status(response.status).json(response)
}

export default handler;