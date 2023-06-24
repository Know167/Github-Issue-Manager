import React from 'react'

const Repo = (props) => {
    const onClickRepo = () => {
        const repoData = {
            id:props.id,
            name:props.name,
            desc:props.description,
            date:props.date,
        }
        props.setSpecificRepo(repoData);
    }
    return (
        <div key={props.id} onClick={onClickRepo}>
            <h1>{props.name}</h1>
            <br />
            <h3>{props.description}</h3>
            <br />
            <span>{props.date}</span>
            <br />
            <br />
            <hr />
        </div>
    );
 
}

export default Repo
