import { Outlet } from "react-router";

import "../assets/css/styles.css";
import "../assets/css/custom.css";

const GuestLayout = () => {
    return (
        <div className="w-full md:max-w-96 md:mx-auto md:!max-h-screen md:overflow-y-auto">
            <main className="w-full min-h-screen !bg-white px-5 py-22">
                <Outlet />
            </main>
        </div>
    );
};

export default GuestLayout;
