import fetcher from "./fetcher";
export const fetchGithubRepos = async (token) => {
    // console.log("Fetching repositories with token:", token);
    const response = await fetcher("/api/get-repo-list", token);

    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    const data = await response.json();
    // console.log("Fetched data:", data);
    return data;
};

export default fetchGithubRepos;
