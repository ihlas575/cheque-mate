import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    EllipsisHorizontalIcon,
    MagnifyingGlassIcon,
    PencilIcon,
    PencilSquareIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import BottomBar from "@/components/BottomBar";
import { Link } from "react-router";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Trades = () => {
    return (
        <>
            <div className="w-full fixed top-0 left-0 flex justify-between items-center border-b bg-white pl-3 pr-1 py-2">
                <p className="title text-xl font-semibold">Trades</p>

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

            <Table className="!rounded-xl border">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead className="min-w-[100px] text-center text-[15px] py-3 font-semibold title">
                            ID
                        </TableHead>
                        <TableHead className="min-w-[120px] text-center text-[15px] py-3 font-semibold title">
                            Date
                        </TableHead>
                        <TableHead className="min-w-[200px] text-center text-[15px] py-3 font-semibold title">
                            Client
                        </TableHead>
                        <TableHead className="min-w-[120px] text-center text-[15px] py-3 font-semibold title">
                            Amount
                        </TableHead>
                        <TableHead className="min-w-[120px] text-center text-[15px] py-3 font-semibold title">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium text-center">
                            INV001
                        </TableCell>
                        <TableCell className="text-center">
                            22/12/2024
                        </TableCell>
                        <TableCell className="text-center">
                            Okray Bathik
                        </TableCell>
                        <TableCell className="text-center">
                            Rs. 1,200,000
                        </TableCell>
                        <TableCell className="flex justify-center text-center gap-2">
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <PencilSquareIcon className="size-4" />
                            </Button>
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-center">
                            INV001
                        </TableCell>
                        <TableCell className="text-center">
                            22/12/2024
                        </TableCell>
                        <TableCell className="text-center">
                            Okray Bathik
                        </TableCell>
                        <TableCell className="text-center">
                            Rs. 1,200,000
                        </TableCell>
                        <TableCell className="flex justify-center text-center gap-2">
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <PencilSquareIcon className="size-4" />
                            </Button>
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-center">
                            INV001
                        </TableCell>
                        <TableCell className="text-center">
                            22/12/2024
                        </TableCell>
                        <TableCell className="text-center">
                            Okray Bathik
                        </TableCell>
                        <TableCell className="text-center">
                            Rs. 1,200,000
                        </TableCell>
                        <TableCell className="flex justify-center text-center gap-2">
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <PencilSquareIcon className="size-4" />
                            </Button>
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-center">
                            INV001
                        </TableCell>
                        <TableCell className="text-center">
                            22/12/2024
                        </TableCell>
                        <TableCell className="text-center">
                            Okray Bathik
                        </TableCell>
                        <TableCell className="text-center">
                            Rs. 1,200,000
                        </TableCell>
                        <TableCell className="flex justify-center text-center gap-2">
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <PencilSquareIcon className="size-4" />
                            </Button>
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-center">
                            INV001
                        </TableCell>
                        <TableCell className="text-center">
                            22/12/2024
                        </TableCell>
                        <TableCell className="text-center">
                            Okray Bathik
                        </TableCell>
                        <TableCell className="text-center">
                            Rs. 1,200,000
                        </TableCell>
                        <TableCell className="flex justify-center text-center gap-2">
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <PencilSquareIcon className="size-4" />
                            </Button>
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-center">
                            INV001
                        </TableCell>
                        <TableCell className="text-center">
                            22/12/2024
                        </TableCell>
                        <TableCell className="text-center">
                            Okray Bathik
                        </TableCell>
                        <TableCell className="text-center">
                            Rs. 1,200,000
                        </TableCell>
                        <TableCell className="flex justify-center text-center gap-2">
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <PencilSquareIcon className="size-4" />
                            </Button>
                            <Button
                                className="bg-transperant text-black rounded-full !p-[5px]"
                                size="icon"
                                variant="outline"
                            >
                                <TrashIcon className="size-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <BottomBar />
        </>
    );
};

export default Trades;
