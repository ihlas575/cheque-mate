import BottomBar from "@/components/BottomBar";
import ChequeSheet from "@/components/ChequeSheet";
import Header from "@/components/Header";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Cheques = () => {
    return (
        <>
            <Header
                title="Cheques"
                links={[
                    {
                        title: "Add New Cheque",
                        url: "/cheques/add",
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

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <ChequeSheet />
                <ChequeSheet />
                <ChequeSheet />
                <ChequeSheet />
                <ChequeSheet />
                <ChequeSheet />
            </div>

            <BottomBar />
        </>
    );
};

export default Cheques;
