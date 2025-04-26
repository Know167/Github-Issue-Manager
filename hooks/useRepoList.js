import { useContext, useEffect, useState } from "react";
import {UserDataContext} from "@/store/userDataContext";
import { isGuestUser } from "@/utils/isGuestUser"; 
import { fetchGithubRepos } from "@/utils/fetchGithubRepos";
import { useSession } from "next-auth/react";
const STORAGE_KEY = "guestSession";

export const useRepoList = () => {
    const { data: session } = useSession();
    const { repoList, handleRepoList } = useContext(UserDataContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadRepos = async () => {
        try {
            setLoading(true);
            setError(null);

            // 1. Context already has data → use it
            if (repoList && repoList.length > 0) return;

            // 2. Guest user? Load from localStorage/sessionStorage
            if (isGuestUser(session)) {
                const cached = localStorage.getItem(STORAGE_KEY);
                if (cached) {
                    const parsed = JSON.parse(cached);
                    handleRepoList(parsed.repos);
                    return;
                }
            }

            // 3. Logged-in user? Hit GitHub API
          if (session && session.accessToken) {
                const fetchedRepos = await fetchGithubRepos(
                    session.accessToken
            );
                handleRepoList(fetchedRepos);
                return;
            }

            // 4. Fallback — no session, no cache
            throw new Error("Unable to load repositories.");
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

  useEffect(() => {
      // console.log("useRepoList effect", session);
        loadRepos();
    }, [session,repoList]);

    return {
        repos: repoList,
        loading,
        error,
    };
};
