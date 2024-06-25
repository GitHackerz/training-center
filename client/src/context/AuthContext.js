
import { createContext, useContext, useEffect, useRef, useState } from "react";
import axiosInstance from "../api/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";



export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {
  const [UserToken, setUserToken] = useState(null);
  const [Role, setRole] = useState(null);
  console.log("eee",Role);



  const login = async (data) => {

    try {
      const res = await axiosInstance.post("/users/login", data);
      console.log("nnnnnnnnnnnnnnnnn",res.data.data.token);
      const decode = jwtDecode(res.data.data.token);
     
      setUserToken(res.data.data.token);
      setRole(decode.role)
     

    
    } catch (error) {
      if (error.response) {
        if (error.response.status == 400) {
        console.log("npoooooooooooooooooooooooooooooos");

        }
      }


    }
  };

  const AuthValue = {
    login,UserToken,Role,setRole,setUserToken
  }
  return (
    <AuthContext.Provider
      value={AuthValue}
    >
      {children}
    </AuthContext.Provider>
  );
};