import React, {useContext, useEffect} from "react";
import {Navigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export default function Form() {
    const {Role, setRole} = useContext(AuthContext);
    useEffect(() => {
        const role = window.localStorage.getItem("my-key");
        if (role !== null) {
            setRole(JSON.parse(role));
        }
    }, []);
    if (Role != "FORMATEUR") {
        return <Navigate to="/"/>
    } else {
        return <div>FORMATEUR</div>;
    }
}
