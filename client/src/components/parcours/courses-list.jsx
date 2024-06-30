import CourseCard from "./course-card";
import {useNavigate, useParams} from "react-router-dom";
import axiosInstance from "../../api/AxiosInstance";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import {jwtDecode} from "jwt-decode";

export default function CoursesList({type}) {
    const {UserToken} = useContext(AuthContext);
    const {parcourId} = useParams();
    const [courses, setCourses] = useState([]);
    const [userParcoursIds, setUserParcoursIds] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getCourses().then(() => getUserParcours());
    }, [UserToken, parcourId]);

    const getCourses = async () => {
        const res = await axiosInstance.get(`/parcours/${parcourId}`);
        setCourses(res.data.parcour.courses);
    }

    const getUserParcours = async () => {
        const userId = jwtDecode(UserToken.toString()).id
        const res = await axiosInstance.get(`/users/${userId}`);
        console.log(res.data.user)
        const temp = [];
        res.data.user.parcours.forEach(p => {
            temp.push(p._id);
        });
        setUserParcoursIds(temp);
    }

    const followParcour = async () => {
        const userId = jwtDecode(UserToken.toString()).id
        await axiosInstance.put(`/users/${userId}/parcour/${parcourId}`);
        await getUserParcours();
    }

    const unfollowParcour = async () => {
        const userId = jwtDecode(UserToken.toString()).id
        await axiosInstance.delete(`/users/${userId}/parcour/${parcourId}`);
        await getUserParcours();

        console.log(type)
        if (type === "MY_PARCOURS"){
            navigate("/my-parcours")
        }
    }

    return (
        <div className="px-80 mx-auto">
            <div className="inline-flex justify-between items-center w-full py-20">
                <h1 className="text-6xl font-semibold"><span className="font-bold text-7xl">Parcour:</span> TITRE
                    PARCOUR</h1>
                {
                    userParcoursIds.includes(parcourId) ? <button
                            onClick={unfollowParcour}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl mt-4">Unfollow</button> :
                        <button
                            onClick={followParcour}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl mt-4">Follow</button>
                }
            </div>
            <div className="pb-32">
                {
                    courses.map((course) => <CourseCard key={course._id} index={course._id} course={course}/>)
                }
            </div>
        </div>
    )
}