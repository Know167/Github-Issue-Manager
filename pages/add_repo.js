import React, { useRef, useContext, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AuthContext } from "@/store/authContext";
import fetcher from "@/utils/fetcher";

const AddRepo = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const nameRef = useRef();
    const descRef = useRef();
    const privRef = useRef();
    const [error, setError]=useState({})
  
    const submitHandler = (event) => {
        event.preventDefault();
        if (nameRef.current.value?.length > 5) {
            const reqBody = {
                name: nameRef.current.value,
                desc: descRef.current.value || "",
                privacy: privRef.current.checked,
            };
            // console.log('authctx-add-repo: '+authCtx);
            fetcher("api/add-repo", session.accessToken, reqBody);
            alert('repository created')
            router.push("/repos");
        } else {
            setError({message: 'repository name must be greater than 5 characters'})
        }
    };
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1>Add new Repository</h1>
            <hr />
            <form
                style={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}>
                {error && <p>{error.message}</p>}
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        ref={nameRef}
                    />
                </label>
                <br />
                <label htmlFor="desc">
                    Description
                    <input type="text" name="desc" id="desc" ref={descRef} />
                </label>
                <br />
                <label htmlFor="privacy">
                    private
                    <input
                        type="checkbox"
                        name="privacy"
                        id="privacy"
                        defaultChecked={0}
                        ref={privRef}
                    />
                </label>
                <br />
                <button onClick={submitHandler}>Create New Repository</button>
            </form>
        </div>
    );
};

export default AddRepo;
