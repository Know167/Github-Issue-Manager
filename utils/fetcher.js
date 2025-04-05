const fetcher = async (url, token, data) => {
  try {
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
  } catch (err) {
     console.log(err);  
   }
};

export default fetcher;
