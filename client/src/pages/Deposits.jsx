import BottomBar from "@/components/BottomBar";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router";

const Deposits = () => {
    return (
        <>
            <div className="w-full fixed top-0 left-0 flex justify-between items-center border-b bg-white pl-3 pr-1 py-2">
                <p className="title text-xl font-semibold">Deposits</p>

                <div className="flex justify-end items-center gap-1">
                    <button className="rounded-full p-2 cursor-pointer">
                        <PlusCircleIcon className="size-5" />
                    </button>

                    <button className="rounded-full p-2 cursor-pointer">
                        <MagnifyingGlassIcon className="size-5" />
                    </button>

                    <Link to="/profile">
                        <button className="rounded-full p-2 cursor-pointer">
                            <UserCircleIcon className="size-5" />
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <p>All Deposits Goes Here...</p>
            </div>

            <BottomBar />
        </>
    );
};

export default Deposits;
