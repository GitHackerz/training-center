import React, { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Navigationform } from './navigationformateur' 
import { Form1 } from './for1' 
import { Form2 } from './for2' 
import { Form3 } from './for3' 
import { AuthContext } from "../context/AuthContext";

 


export default function Form() {
   
  
  const { Role, UserToken, setRole, setUserToken } = useContext(AuthContext);
  useEffect(() => {
    const roole = window.localStorage.getItem("my-key");
    if (roole !== null) {
      setRole(JSON.parse(roole));
    }
  }, []);
  if (  Role != "FORMATEUR") {
   return <Navigate to="/"/>
  }else{
    return <div>FORMATEUR</div>;
  }
}
