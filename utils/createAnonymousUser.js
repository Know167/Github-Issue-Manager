import guestAvatar from "../public/assets/guest-avatar.png";

const createAnonymousUser = () => {
    const unique_uuid =
        "anonymous-" + Math.random().toString(36).substring(2, 9);
    return {
        id: unique_uuid,
        email: `guest@example.com`,
        name: "Guest",
        image: guestAvatar.src,
        provider: "anonymous",
    };
};

export default createAnonymousUser;
