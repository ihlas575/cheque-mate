import React from "react";
import { Link } from "react-router";

const Header = (props) => {
    return (
        <div className="w-full fixed top-0 left-0 flex justify-between items-center border-b bg-white pl-3 pr-1 py-2">
            <p className="title text-xl font-semibold">{props.title}</p>

            <div className="flex justify-end items-center gap-1">
                {props.links.map((item, index) => (
                    <Link to={item.url} key={index} title={item.title}>
                        <button className="rounded-full p-2 cursor-pointer">
                            {item.icon}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
