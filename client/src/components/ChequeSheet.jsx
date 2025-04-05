import React from "react";
import { Button } from "./ui/button";
import {
    ArrowRightIcon,
    CheckCircleIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";

const ChequeSheet = () => {
    return (
        <div
            className="w-full border shadow-xs rounded-xl bg-white py-1"
            style={{
                border: "1px solid #dbdbdb",
                boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
        >
            <div className="flex justify-between items-center px-4 py-3">
                <div className="flex items-center gap-2">
                    <div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="title text-sm font-semibold">
                            Global Silk
                        </p>
                        <p className="text-[10px] !text-gray-600 items-center">
                            Due: 27/05/2025
                        </p>
                    </div>
                </div>

                <div>
                    <Badge variant="secondary" className="px-5 py-2">
                        <Clock className="size-3 mr-[2px]" />
                        Issued
                    </Badge>
                </div>
            </div>

            <div
                className="bg-gray-100 pt-3 pb-3 px-4"
                style={{ backgroundColor: "#f3f4f6" }}
            >
                <p className="numeric text-xl font-semibold mb-4">
                    Rs. 1,200,000.00
                </p>
                <div className="flex justify-between">
                    <p className="text-xs">
                        Cheque Type: <span>Bearer</span>
                    </p>
                    <p className="text-xs">
                        Due Date: <span>12/02/2024</span>
                    </p>
                </div>
            </div>

            <div className="px-4 pt-3 pb-4">
                <div className="flex justify-between items-center mb-5">
                    <p className="numeric text-sm">#123456</p>
                    <p className="numeric text-sm text-accent">
                        Commercial Bank
                    </p>
                </div>

                <Button className="w-full !text-xs uppercase cursor-pointer rounded-full text-white py-5">
                    Checkout Now
                    <ArrowRightIcon className="size-4" />
                </Button>
            </div>
        </div>
    );
};

export default ChequeSheet;
