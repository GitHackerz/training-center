import React, {useContext, useEffect} from "react";
import {Navigate} from "react-router-dom";

import {AuthContext} from "../context/AuthContext";

export default function Home() {


    const {Role, UserToken, setRole, setUserToken} = useContext(AuthContext);
    useEffect(() => {
        const roole = window.localStorage.getItem("my-key");
        if (roole !== null) {
            setRole(JSON.parse(roole));
        }
    }, []);
    if (Role != "APPRENANT") {
        return <Navigate to="/"/>
    } else {
        return <div>Apprenant</div>;
    }
}
