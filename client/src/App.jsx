import React from "react";

import {AuthProvider} from "./context/AuthContext";
import "./App.css";
import AppNav from "./components/AppNav";

const App = () => {
  return (
    <AuthProvider>
     <AppNav />
    </AuthProvider>
  );
};

export default App;
