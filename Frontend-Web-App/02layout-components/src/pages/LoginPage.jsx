import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const LoginPage = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const location = useLocation();

    const navigate = useNavigate();
    // console.log(location);
    const handleLogin = () => {
        console.log(isLoggedIn);
        setIsLoggedIn(true);
        // console.log(location.state.prevURL);
        const redirectPath = location.state?.prevURL || "/";
        navigate(redirectPath);
    };
    return (
        <div className="flex flex-col space-y-60 items-center justify-center">
            <h1 className="text-3xl ">Please login to continue</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginPage;
