import {Navigation} from "../../components/navigation";
import {Header} from "../../components/header";
import React, {useContext, useEffect} from "react";
import ParcoursList from "../../components/parcours/parcours-list";
import axiosInstance from "../../api/AxiosInstance";
import {jwtDecode} from "jwt-decode";
import {AuthContext} from "../../context/AuthContext";

export default function ParcoursPage({type = "ALL"}) {
    const [parcours, setParcours] = React.useState([]);
    const {UserToken} = useContext(AuthContext);

    const getParcours = async () => {
        try {
            const response = await axiosInstance.get("/parcours");
            setParcours(response.data.parcours);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getUserParcours = async () => {
        const userId = jwtDecode(UserToken.toString()).id
        const res = await axiosInstance.get(`/users/${userId}`);
        setParcours(res.data.user.parcours);
    }

    useEffect(() => {
        if (type === "ALL")
            getParcours();
        else
            getUserParcours();
    }, [UserToken, type]);

    return (
        <div>
            <Navigation/>
            <Header/>
            <ParcoursList parcours={parcours} type={type}/>
        </div>
    );
}