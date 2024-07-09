import React from "react";
import Image from "next/image";

import meeting from "../public/assets/meeting.jpg";

const ImagePart = (props) => {
    return (
        <>
            <div
                className={` float-${props.direction} rounded-xl xl:w-6/12 hidden md:hidden lg:flex `}>
                <Image
                    src={meeting}
                    alt="meeting"
                    width={500}
                    height={500}
                    style={{ borderRadius: "20px" }}
                />
            </div>
        </>
    );
};
export default ImagePart;