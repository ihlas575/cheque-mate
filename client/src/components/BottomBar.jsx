import {
    Squares2X2Icon as DashboardIcon,
    TicketIcon as ChequesIcon,
    UsersIcon as ClientsIcon,
    CurrencyRupeeIcon as DepositsIcon,
    DocumentTextIcon as TradesIcon,
} from "@heroicons/react/24/outline";

import {
    Squares2X2Icon as DashboardFilledIcon,
    TicketIcon as ChequesFilledIcon,
    UsersIcon as ClientsFilledIcon,
    CurrencyRupeeIcon as DepositsFilledIcon,
    DocumentTextIcon as TradesFilledIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link, useLocation } from "react-router";

const BottomBar = () => {
    const activeRoute = useLocation();

    return (
        <div
            className="fixed bottom-0 left-0 z-50 w-full grid grid-cols-5 border-t shadow-xl bg-white md:hidden"
            id="bottomNavigationBar"
            style={{
                borderTop: "0.5px solid #dbdbdb",
            }}
        >
            <Link
                to="/"
                className={`w-full pointer-cursor py-3 px-3 ${
                    activeRoute.pathname === "/" && "active"
                }`}
            >
                {activeRoute.pathname === "/" ? (
                    <DashboardFilledIcon className="size-5 mx-auto mb-1 text-stone-800" />
                ) : (
                    <DashboardIcon className="size-5 mx-auto mb-1 text-stone-800" />
                )}
                <p className="text-[10px] text-center text-stone-800">
                    Dashboard
                </p>
            </Link>

            <Link
                to="/cheques"
                className={`w-full pointer-cursor py-3 px-3 ${
                    activeRoute.pathname === "/cheques" && "active"
                }`}
            >
                {activeRoute.pathname === "/cheques" ? (
                    <ChequesFilledIcon className="size-5 mx-auto mb-1 text-stone-800" />
                ) : (
                    <ChequesIcon className="size-5 mx-auto mb-1 text-stone-800" />
                )}
                <p className="text-[10px] text-center text-stone-800">
                    Cheques
                </p>
            </Link>

            <Link
                to="/deposits"
                className={`w-full pointer-cursor py-3 px-3 ${
                    activeRoute.pathname === "/deposits" && "active"
                }`}
            >
                {activeRoute.pathname === "/deposits" ? (
                    <DepositsFilledIcon className="size-5 mx-auto mb-1 text-stone-800" />
                ) : (
                    <DepositsIcon className="size-5 mx-auto mb-1 text-stone-800" />
                )}
                <p className="text-[10px] text-center text-stone-800">
                    Deposits
                </p>
            </Link>

            <Link
                to="/trades"
                className={`w-full pointer-cursor py-3 px-3 ${
                    activeRoute.pathname === "/trades" && "active"
                }`}
            >
                {activeRoute.pathname === "/trades" ? (
                    <TradesFilledIcon className="size-5 mx-auto mb-1 text-stone-800" />
                ) : (
                    <TradesIcon className="size-5 mx-auto mb-1 text-stone-800" />
                )}
                <p className="text-[10px] text-center text-stone-800">Trades</p>
            </Link>

            <Link
                to="/clients"
                className={`w-full pointer-cursor py-3 px-3 ${
                    activeRoute.pathname === "/clients" && "active"
                }`}
            >
                {activeRoute.pathname === "/clients" ? (
                    <ClientsFilledIcon className="size-5 mx-auto mb-1 text-stone-800" />
                ) : (
                    <ClientsIcon className="size-5 mx-auto mb-1 text-stone-800" />
                )}
                <p className="text-[10px] text-center text-stone-800">
                    Clients
                </p>
            </Link>
        </div>
    );
};

export default BottomBar;
