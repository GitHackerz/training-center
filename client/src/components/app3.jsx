import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/AxiosInstance";
import { AuthContext } from "../context/AuthContext";
export const App3 = (props) => {
  const {login}=useContext(AuthContext)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email:"",password:""
    }
  })
  console.log(watch());
  return (
    <div id="App3" className="text-center">
      <div id="team">
      
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Se connecter</h2>
          <form on onSubmit={handleSubmit(login)}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
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
        <div className="mb-3">
        
        </div>
        <div className="d-grid">
          <input type="submit" className="btn btn-primary"/>
          
        </div>
       
      </form>
        </div>
      </div>
    </div>
    </div>

  );
};
