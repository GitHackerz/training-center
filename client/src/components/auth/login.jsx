import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const { login, setRole, Role, UserToken } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        const storedRole = window.localStorage.getItem("my-key");
        if (storedRole) {
            setRole(JSON.parse(storedRole));
        }
    }, [setRole]);

    useEffect(() => {
        if (UserToken) {
            window.localStorage.setItem('token', JSON.stringify(UserToken));
        }
    }, [UserToken]);

    useEffect(() => {
        if (Role) {
            window.localStorage.setItem('my-key', JSON.stringify(Role));
            if (Role === "ADMIN") {
                window.location.href = "http://localhost:3040";
            } else {
                navigate("/parcours");
            }
        }
    }, [Role, navigate]);

    const handleLogin = (data) => {
        login(data);
    };

    return (
        <div id="login" >
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2 className="text-center text-4xl font-bold">Se connecter</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="mb-3 text-lg">
                            <label className="text-xl">Email address</label>
                            <input
                                type="text"
                                className="form-control text-xl"
                                placeholder="Enter email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-danger text-left text-lg">Email is required</span>}
                        </div>

                        <div className="mb-3 text-lg">
                            <label className="text-xl">Password</label>
                            <input
                                type="password"
                                className="form-control text-xl"
                                placeholder="Enter password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-danger text-left text-lg">Password is required</span>}

                        </div>
                        <div className="mb-3"></div>
                        <div className="d-grid text-center">
                            <input type="submit" className="btn btn-primary" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
