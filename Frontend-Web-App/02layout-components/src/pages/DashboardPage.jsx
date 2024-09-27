import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const DashboardPage = () => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    // console.log(location);
    // console.log(location.pathname); => /dashboard
    if (!isLoggedIn) {
        // here we are sending navigation props
        return <Navigate to="/login" state={{ prevURL: location.pathname }} />;
    }
    return <div>DashboardPage</div>;
};

export default DashboardPage;
