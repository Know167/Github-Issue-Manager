import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import { AuthContext } from "@/store/authContext";
import classes from "./UserBio.module.css";

const UserBio = (props) => {
    const router = useRouter();
    const [toggle, settoggle] = useState(false);
    const authCtx = useContext(AuthContext);
    const logout = (e) => {
        e.preventDefault();
        signOut();
        authCtx.logoutHandler()
        router.push('/api/auth/signin')
    }
    const toggleMenu = () => {
        settoggle((prev) => !prev);
    };
    const dropdownshow = toggle ? classes.show : null;
    return (
        
        <div className={classes.dropdown}>
            <button onClick={toggleMenu} className={classes.dropbtn}>
                <img
                    src={props.avatar}
                    alt="avatar"
                    className={classes.avatar}
                />
            </button>
            <div
                id="myDropdown"
                className={`${classes.dropdownContent} ${dropdownshow}`}>
                <button onClick={logout} >Logout</button>
            </div>
        </div>
    );
};

export default UserBio;
