import React, { useState, useEffect, useContext } from "react";

import { AuthContext, AuthProvider } from "./context/AuthContext";
import { Contact } from "./components/contact";
import "./App.css";
import AppNav from "./components/AppNav";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (

    <AuthProvider>
     <AppNav /> 
    
     
    

    </AuthProvider>

  );
};

export default App;
