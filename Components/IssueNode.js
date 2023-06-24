import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React, { useState, useContext } from "react";
import { UserDataContext } from "@/store/userDataContext";
import fetcher from "@/utils/fetcher";
const IssueNode = (props) => {
    const userDataCtx = useContext(UserDataContext);
    const router = useRouter();
    const sperepoId = router.query.id;
    const sperepo = userDataCtx.repoList.filter((i) => i.id === +sperepoId);
    const { data: session } = useSession();
    const [title, setTitle] = useState(props.node.title);
    const [desc, setDesc] = useState(props.node.desc);

    const titleChangeHandler = (e) => {
        props.node.title = e.target.value;
        setTitle(e.target.value);
        props.updateFn();
    };

    const descChangeHandler = (e) => {
        props.node.desc = e.target.value;
        setDesc(e.target.value);
        props.updateFn();
    };

    class Issue {
        constructor(id = "root", title = "", desc = "") {
            this.id = id;
            this.desc = desc;
            this.title = title;
            this.child = [];
        }
    }
    const gitCommitHandler = async () => {
        if (title && title.length > 5) {
            const reqBody = {
                owner: session.user.name,
                reponame: sperepo[0].name,
                title,
                desc,
            };
            const response = await fetcher(
                "/api/add-git-issue",
                session.accessToken,
                reqBody
            );
            alert("issue has been created");
        }
    };

    const addIssue = () => {
        const id = Math.random().toString();
        const temp = props.node.child.concat(new Issue(id));
        props.node.child = temp;
        props.node.child.slice();
        props.updateFn();
    };

    const deleteIssue = () => {
        props.deleteFn(props.id);
        props.updateFn();
    };

    const deleteChild = (id) => {
        let temp = props.node.child;
        temp = temp.filter((i) => +i.id !== +id);
        props.node.child = temp;
        props.updateFn();
    };
    return (
        <div>
            <button onClick={addIssue}>+</button>
            <button onClick={deleteIssue}>del</button>
            <button onClick={gitCommitHandler}>toGit</button>
            <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={titleChangeHandler}
            />
            <div>
                <textarea
                    name="desc"
                    id="desc"
                    rows={8}
                    value={desc}
                    onChange={descChangeHandler}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}>
                {props.node.child.length > 0 &&
                    props.node.child.map((i) => {
                        return (
                            <IssueNode
                                key={i.id}
                                node={i}
                                id={i.id}
                                updateFn={props.updateFn}
                                deleteFn={deleteChild}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default IssueNode;
