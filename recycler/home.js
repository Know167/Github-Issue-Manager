import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/store/authContext";

import { useRouter } from "next/router";
const Home3 = () => {
    const authCtx = useContext(AuthContext);
    const [code, setCode] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("?code=");

        const data = async () => {
            let winCode;

            const temp = url.split("?code=");
            winCode = temp[1];
            authCtx.loginHandler(winCode);
            setCode(winCode)
            localStorage.setItem("code", winCode);
        };
        if (hasCode) {
            data();
        }
    },[]);

    useEffect(() => {
        const access_token = async () => {
            //fetching Access  Token
            const reqBody = {
                code: code,
                client_id: authCtx.client_id,
                client_secret: authCtx.client_secret,
                redirect_uri: authCtx.redirect_uri,
            };

            const response = await fetch("api/get-access-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(reqBody),
            });

            const resData = await response.json();
            localStorage.setItem("acc_token", resData.access_token);
            resData.access_token&&authCtx.tokenHandler(resData.access_token);
        };
        access_token();
        router.push('/repos')
    }, [code]); 

    return <div></div>;
};

export default Home3;
