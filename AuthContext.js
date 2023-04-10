import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const logIn = () => {
        setIsAuth(true);
    }

    return (
        <AuthContext.Provider value={{ isAuth, logIn }}>
            {children}
        </AuthContext.Provider>
    );
};