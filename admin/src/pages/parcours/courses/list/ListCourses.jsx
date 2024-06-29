import "./style.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import {Toaster} from "react-hot-toast";
import CoursesDatatable from "../../../../components/datatable/courses/CoursesDatatable";
import {useParams} from "react-router-dom";

const ListCourses = () => {
    const {parcoursId} = useParams();

    return (
        <div className="list">
            <Toaster/>
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <CoursesDatatable parcourId={parcoursId}/>
            </div>
        </div>
    )
}

export default ListCourses