import React, { useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import classes from "./UserBio.module.css";

const UserBio = (props) => {
    const router = useRouter();
    const [toggle, settoggle] = useState(false);
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("guestSession");
        signOut({ callbackUrl: "/" });
    };
    const toggleMenu = () => {
        settoggle((prev) => !prev);
    };
    const dropdownshow = toggle ? "relative" : "hidden";
    return (
        <div className={classes.dropdown}>
            <button onClick={toggleMenu} className={classes.dropbtn}>
                <img
                    src={props.avatar}
                    alt="avatar"
                    className="w-20 rounded-full border-2 "
                />
            </button>
            <div
                id="myDropdown"
                className={`${dropdownshow} bg-opacity-75 text-sm rounded text-center text-white font-semibold rounded-2 `}>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default UserBio;
