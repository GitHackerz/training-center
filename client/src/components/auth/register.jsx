import React from "react";
import {useForm} from "react-hook-form";
import axiosInstance from "../../api/AxiosInstance";

export const Register = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: "", lastName: "",
            email: "", password: ""
        }
    })

    const signup = async (data) => {
        try {
            const res = await axiosInstance.post("/users/register", data);
            if (res.status == 201) {
                console.log("done");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div id="register" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2 className="text-center text-4xl font-bold">S'inscrire</h2>
                    <form onSubmit={handleSubmit(signup)}>
                        <div className="mb-3">
                            <label className="text-xl">First name</label>
                            <input
                                type="text"
                                className="form-control text-xl"
                                placeholder="Enter first name"
                                {...register("firstName")}
                            />
                            {
                                errors.firstName && <p className="text-red-500">FirstName is required</p>
                            }
                        </div>
                        <div className="mb-3">
                            <label className="text-xl">Last name</label>
                            <input
                                type="text"
                                className="form-control text-xl"
                                placeholder="Enter last name"
                                {...register("lastName")}
                            />

                        </div>
                        <div className="mb-3">
                            <label className="text-xl">Email address</label>
                            <input
                                type="email"
                                className="form-control text-xl"
                                placeholder="Enter email"
                                {...register("email")}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="text-xl">Password</label>
                            <input
                                type="password"
                                className="form-control text-xl"
                                placeholder="Enter password"
                                {...register("password")}
                            />
                        </div>
                        <div className="mb-3">
                        </div>
                        <div className="d-grid">
                            <input type="submit" className="btn btn-primary"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
