import "./style.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import {ServerUrl} from "../../../config/server";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import ParcoursFormC from "../../../components/forms/ParcoursFormC";

const ParcoursFormP = ({type = 'NEW'}) => {
    const [loading, setLoading] = useState(true)
    const {parcoursId} = useParams();
    const [parcours, setParcours] = useState({
        title: "",
        description: "",
        duration: "",
        price: "",
        category: "",
        trainer: "",
        startDate: "",
        endDate: "",
    })

    const getParcour = async () => {
        const res = await axios.get(`${ServerUrl}/parcours/${parcoursId}`)
        setParcours(res.data.parcour)
    }

    useEffect(() => {
        if (type === 'UPDATE')
            getParcour().then(() => setLoading(false))
        else
            setLoading(false)
    }, []);

    if (!loading)
        return (
            <div className="new">
                <Toaster/>
                <Sidebar/>
                <div className="newContainer">
                    <Navbar/>
                    <div className="top">
                        <h1>{type === 'NEW' ? 'Create New Parcour' : 'Update Parcour'}</h1>
                    </div>
                    <div className="bottom">
                        <div className="right">
                            <ParcoursFormC parcours={parcours} type={type}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return null
};

export default ParcoursFormP;
