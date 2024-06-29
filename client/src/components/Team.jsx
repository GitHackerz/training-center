import React, {useContext, useEffect} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export const Team = (props) => {
    const {login, setRole, Role, UserToken} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });


    console.log(watch());
    useEffect(() => {
        const roole = window.localStorage.getItem("my-key");
        if (roole !== null) {
            setRole(JSON.parse(roole));
        }
    }, []);
    useEffect(() => {
        window.localStorage.setItem('token', JSON.stringify(UserToken));

    }, [UserToken]);

    useEffect(() => {
        window.localStorage.setItem('my-key', JSON.stringify(Role));
        if (Role === "ADMIN") {
            navigate("/users");
        } else {
            navigate("/");
        }
    }, [Role]);
    const navigate = useNavigate();
    const handleLogin = (data) => {
        login(data);


        console.log(Role, "fffff");
    };

    return (
        <div id="team" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Se connecter</h2>
                    <form on onSubmit={handleSubmit(handleLogin)}>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email"
                                {...register("email")}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                {...register("password")}
                                required
                            />
                        </div>
                        <div className="mb-3"></div>
                        <div className="d-grid">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
