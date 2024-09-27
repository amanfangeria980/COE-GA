import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useAuth must be used within a UserContextProvider");
    }

    return context;
};

export default useAuth;
