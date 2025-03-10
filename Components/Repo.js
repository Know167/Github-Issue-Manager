import React from "react";

const Repo = (props) => {
    const onClickRepo = () => {
        const repoData = {
            id: props.id,
            name: props.name,
            desc: props.description,
            date: props.date,
        };
        props.setSpecificRepo(repoData);
    };

    return (
        <div
            key={props.id}
            onClick={onClickRepo}
            className="cursor-pointer p-4 bg-white shadow rounded-lg hover:bg-gray-100 transition duration-200">
            <h1 className="text-xl font-semibold text-gray-800">
                {props.name}
            </h1>
            <p className="text-gray-600 mt-2">{props.description}</p>
            <span className="text-gray-500 mt-4 block">{props.date}</span>
        </div>
    );
};

export default Repo;
