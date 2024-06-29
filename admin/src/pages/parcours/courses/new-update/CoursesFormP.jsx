import "./style.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import axios from "axios";
import {ServerUrl} from "../../../../config/server";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import CourseFormC from "../../../../components/forms/CourseFormC";

const CoursesFormP = ({type = 'NEW'}) => {
    const [loading, setLoading] = useState(true)
    const {parcoursId, courseId} = useParams();
    const [course, setCourse] = useState({
        title: "",
        file: "",
    })

    const getCourse = async () => {
        const res = await axios.get(`${ServerUrl}/parcours/${parcoursId}/courses/${courseId}`)
        setCourse(res.data.course)
    }

    useEffect(() => {
        if (type === 'UPDATE')
            getCourse().then(() => setLoading(false))
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
                        <h1>{type === 'NEW' ? 'Create New Course' : 'Update Course'}</h1>
                    </div>
                    <div className="bottom">
                        <div className="right">
                            <CourseFormC course={course} type={type} parcourId={parcoursId}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return null
};

export default CoursesFormP;
