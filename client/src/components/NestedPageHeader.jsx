import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const NestedPageHeader = (props) => {
    return (
        <div className="w-full fixed top-0 left-0 z-50 flex justify-between items-center border-b bg-white px-3 py-2 mb-2">
            <button
                className="rounded-full p-2 cursor-pointer"
                onClick={() => history.back()}
            >
                <ChevronLeftIcon className="size-4" />
            </button>

            <p className="title text-lg font-semibold">{props.title}</p>

            <button className="rounded-full p-2 cursor-pointer">
                <QuestionMarkCircleIcon className="size-5" />
            </button>
        </div>
    );
};

export default NestedPageHeader;
