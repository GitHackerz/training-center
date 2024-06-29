import "./style.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import {ServerUrl} from "../../../config/server";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserFormC from "../../../components/forms/UserFormC";
import {Toaster} from "react-hot-toast";

const UserFormP = ({type = 'NEW'}) => {
    const [loading, setLoading] = useState(true)
    const {userId} = useParams();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
    })

    const getUser = async () => {
        const res = await axios.get(`${ServerUrl}/users/${userId}`)
        setUser(res.data.data.user)
    }

    useEffect(() => {
        if (type === 'UPDATE')
            getUser().then(() => setLoading(false))
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
                        <h1>{type === 'NEW' ? 'Create New User' : 'Update User'}</h1>
                    </div>
                    <div className="bottom">
                        <div className="right">
                            <UserFormC user={user} type={type}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return null
};

export default UserFormP;
