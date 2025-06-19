import {
    Ellipsis,
    CalendarClock,
    ClockFading,
    Landmark,
    CircleCheck,
    X,
    Check,
    Info,
} from "lucide-react";
import { useState } from "react";

const ChequeSheet = (props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <div className="bg-white border border-gray-200 shadow rounded-lg">
                <div className="flex justify-between items-center px-3 py-3 border-b border-gray-200">
                    <div className="flex justify-start items-center gap-2">
                        <div className="avatar avatar-placeholder">
                            <div className="bg-gray-400 text-neutral-content w-10 rounded-full">
                                <span className="text-xs">GS</span>
                            </div>
                        </div>

                        <div>
                            <h1>{props.clientName}</h1>
                            <p className="text-[10px]">
                                Issue Date:{" "}
                                <span className="numeric">
                                    {props.issueDate}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-circle btn-sm"
                        >
                            <Ellipsis strokeWidth={1.4} size={16} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                        >
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-b border-gray-200">
                    <div className="bg-gray-100 py-3">
                        <div className="py-1 border-l-5 border-blue-400 px-4">
                            <p className="numeric text-lg mb-1">
                                RS. {props.amount}
                            </p>
                            <div className="flex items-start gap-2">
                                <Info strokeWidth={1.5} size={24} />

                                <p className="text-[10px] leading-3 mt-1">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit Delectus autem modi
                                    consectetur consectetur.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="py-3 px-4">
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <ClockFading strokeWidth={1.5} size={14} />
                                <span className="text-[11px] font-medium">
                                    Status
                                </span>
                            </div>
                            <div className="badge badge-sm badge-info text-white text-[10px] numeric">
                                {props.status}
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <CalendarClock strokeWidth={1.5} size={14} />
                                <span className="text-[11px] font-medium">
                                    Due Date
                                </span>
                            </div>
                            <p className="numeric text-[11px]">
                                {props.dueDate}
                            </p>
                        </div>

                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                                <Landmark strokeWidth={1.5} size={14} />
                                <span className="text-[11px] font-medium">
                                    Bank Name
                                </span>
                            </div>
                            <p className="numeric text-[11px]">{props.bank}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center px-4 py-3">
                    <p className="numeric">#{props.chequeNo}</p>

                    <button
                        className="btn btn-xs py-4 bg-success text-white w-34 text-[11px] font-semibold"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    >
                        <CircleCheck strokeWidth={1.75} size={14} />
                        Mark as Paid
                    </button>
                </div>
            </div>

            {isDrawerOpen && (
                <div className="fixed top-0 z-50 bg-black/50 min-h-screen w-full md:w-96 ml-[-16px]">
                    <div className="absolute bottom-0 w-full bg-white rounded-t-2xl border-t border-gray-200 py-5 px-5 opacity-full">
                        <h1 className="text-lg mt-1 mb-1">
                            Confirm Payment Status
                        </h1>
                        <p className="text-xs">
                            Would you like to proceed with marking this cheque
                            as paid? Please note that this action is
                            irreversible.
                        </p>

                        <div className="grid grid-cols-2 items-center gap-3 mt-7">
                            <button
                                className="btn btn-sm px-4 py-4 btn-error text-white w-auto text-[12px] font-semibold"
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            >
                                <X strokeWidth={1.75} size={15} />
                                No, Go Back.
                            </button>

                            <button
                                className="btn btn-sm px-4 py-4 btn-success text-white w-auto text-[12px] font-semibold"
                                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                            >
                                <Check strokeWidth={1.75} size={15} />
                                Yes, Proceed.
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChequeSheet;
