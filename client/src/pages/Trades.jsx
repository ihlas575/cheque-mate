import React from "react";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";

const Trades = () => {
    return (
        <>
            <Header
                title="Trades"
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
                <p>Hello World!</p>
            </div>

            <BottomBar />
        </>
    );
};

export default Trades;
