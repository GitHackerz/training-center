import React from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/AxiosInstance";
export const Testimonials = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "", lastName: "",
      email:"",password:""
    }
  })
  console.log(watch());
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
    <div id="testimonials" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Se connecter</h2>
          <form onSubmit={handleSubmit(signup)} >
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                {...register("firstName")}
              />
            </div><div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                {...register("lastName")}
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                {...register("email")}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                {...register("password")}
              />
            </div>
       {/*      <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                {...register("cpassword")} 
              />
            </div> */}
            <div className="mb-3">

            </div>
            <div className="d-grid">
              <input type="submit" className="btn btn-primary"
 />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
