const fetcher = async (url, token, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: token,
            ...data,
        }),
    });

    return response;
};

export default fetcher;
