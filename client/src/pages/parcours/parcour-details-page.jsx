import {Navigation} from "../../components/navigation";
import {Header} from "../../components/header";
import React from "react";
import CoursesList from "../../components/parcours/courses-list";

export default function ParcourDetailsPage({type="ALL"}) {
    return (
        <div>
            <Navigation/>
            <Header/>
            <CoursesList type={type}/>
        </div>
    );
}