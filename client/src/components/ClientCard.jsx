import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const ClientCard = ({ id, name, logo, isActive }) => {
    return (
        <div
            className="w-full bg-white border rounded"
            style={{
                border: "1px solid #dbdbdb",
                boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
        >
            <div className="flex justify-between items-center px-3 py-3">
                <div className="flex items-center gap-2">
                    <div>
                        <img
                            src={
                                logo
                                    ? logo
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4g_2Qj3LsNR-iqUAFm6ut2EQVcaou4u2YXw&s"
                            }
                            alt=""
                            className="w-14 h-14 rounded-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="title font-semibold">{name}</p>
                        <p className="text-xs !text-gray-600 items-center">
                            Status:{" "}
                            <Badge
                                variant="secondary"
                                className="text-[10px] rounded-sm px-2"
                            >
                                {isActive ? "Active" : "Inactive"}
                            </Badge>
                        </p>
                    </div>
                </div>

                <div>
                    <Button
                        size="icon"
                        className="rounded-full cursor-pointer !text-black  bg-gray-200 hover:bg-gray-300"
                    >
                        <ChevronRightIcon className="size-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ClientCard;
