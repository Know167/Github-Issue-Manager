export const isGuestUser = (session) => {
    return session?.user?.email === "guest@example.com";
};
