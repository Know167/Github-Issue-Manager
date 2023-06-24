import React, { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";

import { UserDataContext } from "@/store/userDataContext";
import IssueTree from "@/Components/IssueTree";

const Index = () => {
    const userDataCtx = useContext(UserDataContext);
    const router = useRouter();
    const passedid = router.query.id;
    const repodata = userDataCtx.repoList;

    const sperepo = repodata.filter((i) => i.id === +passedid);
    return (
        <div style={{ textAlign: "center" }}>
            {sperepo.length>0 && <IssueTree name={sperepo[0].name} />}
        </div>
    );
};

export default Index;
