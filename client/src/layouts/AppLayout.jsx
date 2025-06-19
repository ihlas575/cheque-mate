import { Outlet } from "react-router";

import "../assets/css/styles.css";
import "../assets/css/custom.css";

import MenuBar from "../components/MenuBar";

const AppLayout = () => {
    return (
        <div className="w-full md:max-w-96 md:mx-auto md:!max-h-screen md:overflow-y-auto bg-gray-100 min-h-screen">
            <MenuBar />

            <main className="px-2 pt-5 pb-20">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
