import { createContext, useContext, useEffect, useState } from "react";

export const AuthState = createContext();
const LOCAL_STORAGE_AUTH = "authState";


const AuthProvider = ({ children }) => {
    const [state, setState] = useState({ data: null, register: false });
    // console.log(state);
    useEffect(() => {
        const userData =
            JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH)) || false;
        setState(userData);

    }, []);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(state));
    }, [state]);
    return (
        <AuthState.Provider value={{ state, setState }} >
            {children}
        </AuthState.Provider>
    );
};

export default AuthProvider;
