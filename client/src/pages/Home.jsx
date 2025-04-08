import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import { BellAlertIcon, BellIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Home = () => {
    return (
        <>
            <Header
                title="Dashboard"
                links={[
                    {
                        title: "Notifications",
                        url: "/notifications",
                        icon: <BellAlertIcon className="size-5" />,
                    },

                    {
                        title: "Profile",
                        url: "/profile",
                        icon: <UserCircleIcon className="size-5" />,
                    },
                ]}
            />

            <div>
                <p>Home Page!</p>
            </div>

            <BottomBar />
        </>
    );
};

export default Home;
