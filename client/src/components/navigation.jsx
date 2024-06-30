import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const navLinks = [
    {
        title: "Acceuil",
        link: "/",
        isLoggedIn: undefined
    },
    {
        title: "Sign in",
        link: "/#login",
        isLoggedIn: false
    },
    {
        title: "Sign up",
        link: "/#register",
        isLoggedIn: false
    },
    {
        title: "Parcours",
        link: "/parcours",
        isLoggedIn: true
    },
    {
        title: "Mon Parcours",
        link: "/my-parcours",
        isLoggedIn: true
    },
    {
        title: "Calendrier",
        link: "/calendar",
        isLoggedIn: true
    }
]

export const Navigation = (props) => {
    const {UserToken, logout} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        {" "}
                        <span className="sr-only">Toggle navigation</span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        <img src="/img/vite.png" width={200} height={50} alt=""/>
                    </a>{" "}
                </div>
                <div
                    className=" "
                    id="bs-example-navbar-collapse-1"
                >
                    <ul className="nav navbar-nav navbar-right">
                        {navLinks.map((link, index) => {
                            if (link.isLoggedIn === undefined || link.isLoggedIn === !!UserToken) {
                                return (
                                    <li key={index}>
                                        <a href={link.link} className="page-scroll">
                                            {link.title}
                                        </a>
                                    </li>
                                );
                            }
                        })}
                        {UserToken && (
                            <button
                                className="btn btn-danger"
                                onClick={handleLogout}
                                style={{marginTop: "10px"}}
                            >
                                Logout
                            </button>
                        )}
                    </ul>

                </div>
            </div>
        </nav>
    );
};
