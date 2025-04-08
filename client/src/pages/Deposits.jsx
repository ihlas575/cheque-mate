import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Deposits = () => {
    return (
        <>
            <Header
                title="Deposits"
                links={[
                    {
                        title: "Add New Trade",
                        url: "/trades/add",
                        icon: <PlusCircleIcon className="size-5" />,
                    },

                    {
                        title: "Search",
                        url: "/search",
                        icon: <MagnifyingGlassIcon className="size-5" />,
                    },

                    {
                        title: "Profile",
                        url: "/profile",
                        icon: <UserCircleIcon className="size-5" />,
                    },
                ]}
            />

            <div>
                <p>All Deposits Goes Here...</p>
            </div>

            <BottomBar />
        </>
    );
};

export default Deposits;
