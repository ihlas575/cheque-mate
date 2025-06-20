import {
    LayoutGrid,
    WalletCards,
    Menu,
    ReceiptIndianRupee,
    UsersRound,
} from "lucide-react";
import { NavLink } from "react-router";

const MenuBar = () => {
    return (
        <div className="menu fixed bottom-0 z-20 w-full md:w-96 grid grid-cols-5 items-center bg-white select-none border-gray-300 border-t shadow-2xl">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    [
                        "flex flex-col justify-center items-center text-[10px] py-1 px-1",
                        isActive ? "active" : "",
                    ].join(" ")
                }
            >
                <LayoutGrid strokeWidth={1.6} size={18} className="mb-1" />
                <p>Dashboard</p>
            </NavLink>

            <NavLink
                to="/cheques"
                className="flex flex-col justify-center items-center text-[10px] py-1 px-1"
            >
                <WalletCards strokeWidth={1.6} size={18} className="mb-1" />
                <p>Cheques</p>
            </NavLink>

            <NavLink
                to="/clients"
                className="flex flex-col justify-center items-center text-[10px] py-1 px-1"
            >
                <UsersRound strokeWidth={1.6} size={18} className="mb-1" />
                <p>Clients</p>
            </NavLink>

            <NavLink
                to="/trades"
                className="flex flex-col justify-center items-center text-[10px] py-1 px-1"
            >
                <ReceiptIndianRupee
                    strokeWidth={1.6}
                    size={18}
                    className="mb-1"
                />
                <p>Trades</p>
            </NavLink>

            <NavLink
                to="/more-settings"
                className="flex flex-col justify-center items-center text-[10px] py-1 px-1"
            >
                <Menu strokeWidth={1.6} size={19} className="mb-1" />
                <p>More</p>
            </NavLink>
        </div>
    );
};

export default MenuBar;
