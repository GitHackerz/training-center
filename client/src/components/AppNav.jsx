import React, {useContext, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import {AuthContext} from "../context/AuthContext";
import APPRENANT from "./APPRENANT";
import Formateur from "./formateur";

import Users from "./users";
import ParcoursPage from "../pages/parcours/parcours-page";
import ParcourDetailsPage from "../pages/parcours/parcour-details-page";
import {jwtDecode} from "jwt-decode";
import CalendarPage from "../pages/calendar/calendar-page";

export default function AppNav() {
    const {setRole, setUserToken, setUserId} = useContext(AuthContext);

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token !== null) {
            setUserToken(JSON.parse(token));
            setUserId(jwtDecode(token).id);
        }
    }, []);

    useEffect(() => {
        const role = window.localStorage.getItem("my-key");
        if (role !== null) {
            setRole(JSON.parse(role));
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/calendar" element={<CalendarPage />}/>
                <Route path="my-parcours">
                    <Route index element={<ParcoursPage type="MY_PARCOURS"/>}/>
                    <Route path=":parcourId">
                        <Route index element={<ParcourDetailsPage type="MY_PARCOURS"/>}/>
                    </Route>
                </Route>
                <Route path="parcours">
                    <Route index element={<ParcoursPage type="ALL"/>}/>
                    <Route path=":parcourId">
                        <Route index element={<ParcourDetailsPage type="ALL"/>}/>
                    </Route>
                </Route>
                <Route path="/users" element={<Users/>}/>
                <Route path="/apprenant" element={<APPRENANT/>}/>
                <Route path="/Formateur" element={<Formateur/>}/>
            </Routes>
        </BrowserRouter>
    );
}
