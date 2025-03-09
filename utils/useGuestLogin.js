import { signIn } from "next-auth/react";

const useGuestLogin = () => {
    const handleGuestLogin = () => {
        const mockRepos = [
            { id: 1, name: "Sample Repo 1", description: "Guest repository 1" },
            { id: 2, name: "Sample Repo 2", description: "Guest repository 2" },
        ];

        const mockIssues = {
            "Sample Repo 1": [
                {
                    id: 101,
                    title: "Sample Issue 1",
                    description: "Issue description for Repo 1",
                    child: [],
                },
                {
                    id: 102,
                    title: "Sample Issue 2",
                    description: "Issue description for Repo 1",
                    child: [],
                },
            ],
            "Sample Repo 2": [
                {
                    id: 201,
                    title: "Sample Issue 1",
                    description: "Issue description for Repo 2",
                    child: [],
                },
            ],
        };

        const guestUser = {
            repos: mockRepos, // Mock data for repositories
            issues: mockIssues, // Mock data for issues
        };

        localStorage.setItem("guestSession", JSON.stringify(guestUser));
        signIn("credentials");
    };

    return handleGuestLogin;
};

export default useGuestLogin;
