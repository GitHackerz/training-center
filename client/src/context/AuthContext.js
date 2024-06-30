import {createContext, useState} from "react";
import axiosInstance from "../api/AxiosInstance";
import {jwtDecode} from "jwt-decode";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [UserToken, setUserToken] = useState(null);
    const [Role, setRole] = useState(null);
    const [userId, setUserId] = useState("");

    const login = async (data) => {
        try {
            const res = await axiosInstance.post("/users/login", data);
            const decode = jwtDecode(res.data.data.token);
            setUserToken(res.data.data.token);
            setRole(decode.role)
            setUserId(decode.id)
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    console.log(error.response.data.message)
                }
            }
        }
    };

    const logout = () => {
        setUserToken(null);
        setRole(null);
        setUserId("");
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('my-key');
    }

    const AuthValue = {
        login, logout, UserToken, Role, setRole, setUserToken, userId, setUserId
    }
    return (
        <AuthContext.Provider
            value={AuthValue}
        >
            {children}
        </AuthContext.Provider>
    );
};