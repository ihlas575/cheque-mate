import BottomBar from "@/components/BottomBar";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router";

const Home = () => {
    return (
        <>
            <div className="w-full fixed top-0 left-0 flex justify-between items-center border-b bg-white pl-3 pr-1 py-2">
                <p className="title text-xl font-semibold">Dashboard</p>

                <div className="flex justify-end items-center gap-1">
                    <Link to="/notifications">
                        <button className="rounded-full p-2 cursor-pointer">
                            <BellIcon className="size-5" />
                        </button>
                    </Link>

                    <Link to="/profile">
                        <button className="rounded-full p-2 cursor-pointer">
                            <UserCircleIcon className="size-5" />
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <p>Home Page!</p>
            </div>

            <BottomBar />
        </>
    );
};

export default Home;
