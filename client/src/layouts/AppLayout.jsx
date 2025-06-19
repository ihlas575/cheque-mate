import { Outlet } from "react-router";

import "../assets/css/styles.css";
import "../assets/css/custom.css";

import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <div className="w-full md:max-w-92 md:mx-auto md:bg-white md:!max-h-screen md:overflow-y-auto">
            <MenuBar />

            <main className="!bg-white">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
