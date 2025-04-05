import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full min-h-full px-2 pt-16 pb-20 bg-white">
                <Outlet />
            </main>
        </SidebarProvider>
    );
};

export default AuthLayout;
