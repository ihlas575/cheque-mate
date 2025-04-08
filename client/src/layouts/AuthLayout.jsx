import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <main className="w-full min-h-screen px-2 pt-16 pb-20 bg-white">
            <Outlet />
        </main>
    );
};

export default AuthLayout;
