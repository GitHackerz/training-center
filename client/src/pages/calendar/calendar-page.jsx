import {Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import {Navigation} from "../../components/navigation";
import {Header} from "../../components/header";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axiosInstance from "../../api/AxiosInstance";
import {jwtDecode} from "jwt-decode";

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const myEventsList = [
    {
        title: "My event",
        start: new Date(2024, 0, 20),
        end: new Date(2024, 0, 24)
    },
    {
        title: "My event 2",
        start: new Date(),
        end: new Date()
    }
]

export default function CalendarPage() {
    const {UserToken} = useContext(AuthContext);
    const [events, setEvents] = useState([]);

    const getUserParcours = async () => {
        const userId = jwtDecode(UserToken.toString()).id
        const res = await axiosInstance.get(`/users/${userId}`);
        setEvents([])
        res.data.user.parcours.forEach(parcour => {
            setEvents(prev => {
                return [...prev, {
                    title: parcour.title,
                    start: new Date(parcour.startDate),
                    end: new Date(parcour.endDate)
                }]
            })
        })
    }

    useEffect(() => {
        getUserParcours();
    }, [UserToken]);

    useEffect(() => {
        console.log(events)
    }, [events]);

    return (
        <div>
            <Navigation/>
            <Header/>
            <div className="py-40 flex items-center justify-center">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height: 500, width: 1000}}
                />
            </div>
        </div>
    )
}