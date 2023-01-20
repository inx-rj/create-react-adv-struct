import React from "react";

// react-router-dom pkg methods, hooks and components
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ checkAdmin = false }) => {

    return checkAdmin ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    )
};

export default PrivateRoutes;
