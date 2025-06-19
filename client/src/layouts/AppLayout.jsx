import { Outlet } from "react-router";

import "../assets/css/styles.css";
import "../assets/css/custom.css";

import MenuBar from "../components/MenuBar";

import { InfoIcon } from "lucide-react";

const AppLayout = () => {
    return (
        <>
            <div className="w-full md:max-w-96 md:mx-auto md:!max-h-screen md:overflow-y-auto bg-gray-50 min-h-screen">
                <MenuBar />

                <main className="pb-16 rounded shadow">
                    <Outlet />
                </main>
            </div>

            {/* <div class="hidden md:block">
                <div
                    role="alert"
                    className="w-104 absolute top-2 right-3 alert alert-vertical sm:alert-horizontal"
                >
                    <InfoIcon />

                    <div>
                        <h3 className="font-bold mb-1">
                            Designed Exclusively for Mobile!
                        </h3>
                        <div className="text-xs leading-4">
                            For the best experience, please access it on your
                            mobile device.
                        </div>
                    </div>
                    <button className="btn btn-sm">Ignore</button>
                </div>
            </div> */}
        </>
    );
};

export default AppLayout;
