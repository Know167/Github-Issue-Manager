import React,{useState} from "react";

const ContentPart = ({title, description, list, direction}) => {
    return (
        <>
            <div className="xl:grid xl:grid-rows-6 flex flex-col ml-6 lg:justify-start sm:justify-evenly sm:w-full items-start lg:w-6/12">
                <div className="text-zinc-700 xl:text-start text-center text-2xl font-semibold leading-10 xl:row-span-1 ">
                    {title}
                </div>
                <div className="xl:justify-start items-center xl:row-span-2 ">
                    <div className="text-gray-600 text-md text-ellipsis font-normal font-['Source Sans 3'] leading-7">
                        {description}
                    </div>
                </div>
                <div className="md:row-span-3  lg:flex lg:flex-col hidden">
                    {list?.map((item) => (
                        <div
                            key={item}
                            className=" w-fit h-full px-1.5 py-1.5 my-2 bg-green-300 rounded inline-flex">
                            <div className=" text-white text-[10px] font-bold font-['Source Sans 3'] uppercase leading-3">
                                {item}
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </>
    );
};

export default ContentPart;
