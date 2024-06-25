import React, { useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home";
import { AuthContext } from "../context/AuthContext";
import APPRENANT from "./APPRENANT";
import Formateur from "./formateur";

import Users from "./users";

export default function AppNav() {
  const { Role, UserToken, setRole, setUserToken } = useContext(AuthContext);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token !== null) {
      setUserToken(JSON.parse(token));
    }
  }, []);

  useEffect(() => {
    const roole = window.localStorage.getItem("my-key");
    if (roole !== null) {
      setRole(JSON.parse(roole));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/apprenant" element={<APPRENANT />} />
        <Route path="/Formateur" element={<Formateur />} />
      </Routes>
    </BrowserRouter>
  );
}
