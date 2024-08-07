import React, {useContext, useEffect} from "react";
import {AuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";


export default function Users() {
    const {Role, setRole} = useContext(AuthContext);
    
    useEffect(() => {
        const roole = window.localStorage.getItem("my-key");
        if (roole !== null) {
            setRole(JSON.parse(roole));
        }
    }, []);


    if (Role !== "ADMIN") {
        return <Navigate to="/"/>;
    } else {
        return (
            <div>
                users
            </div>
        );
    }
}
