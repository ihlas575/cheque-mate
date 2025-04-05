import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    ArrowLeftStartOnRectangleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EyeIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { CameraIcon } from "@heroicons/react/24/solid";
import React from "react";

const Profile = () => {
    return (
        <>
            <div className="w-full fixed top-0 left-0 flex justify-between items-center border-b bg-white px-3 py-2 mb-2">
                <button
                    className="rounded-full p-2 cursor-pointer"
                    onClick={() => history.back()}
                >
                    <ChevronLeftIcon className="size-4" />
                </button>

                <p className="title text-lg font-semibold">Profile</p>

                <button className="rounded-full p-2 cursor-pointer">
                    <QuestionMarkCircleIcon className="size-5" />
                </button>
            </div>

            <div>
                <div>
                    <div className="relative w-24 h-24 mx-auto mt-5 mb-2">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Profile Name"
                            loading="lazy"
                            className="w-full h-full aspect-square object-cover rounded-full"
                        />
                        <button className="absolute bottom-0 right-0 rounded-full bg-primary text-white cursor-pointer p-2">
                            <CameraIcon className="size-4" />
                        </button>
                    </div>

                    <div>
                        <p className="title text-xl font-semibold text-center">
                            Mohammed Saheer
                        </p>
                        <p className="text-xs font-light text-center">
                            mmmsaheer@icloud.com
                        </p>
                    </div>
                </div>

                <div className="mt-8 px-3">
                    <div className="grid w-full items-center gap-1.5 mb-3">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            type="text"
                            id="name"
                            className="py-5 rounded-sm"
                            placeholder="Ex: John Doe"
                            value="Mohammed Saheer"
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5 mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            className="py-5 rounded-sm"
                            placeholder="Ex: john.doe@gmail.com"
                            value="mmmsaheer@icloud.com"
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5 mb-3">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            type="text"
                            id="phone"
                            className="py-5 rounded-sm"
                            placeholder="Ex: John Doe"
                            value="0723527121"
                        />
                    </div>

                    <div className="grid w-full items-center gap-1.5 mb-5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            className="py-5 rounded-sm"
                            placeholder="Ex: John Doe"
                            value="makememine"
                            disabled
                        />
                    </div>

                    <Button className="w-full cursor-pointer py-5">
                        Save Details
                    </Button>
                </div>

                <div className="mt-10">
                    <button className="flex justify-between items-center w-full bg-white border shadow-xs rounded-xs cursor-pointer px-3 py-2 mb-2">
                        <div className="flex justify-start items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <EyeIcon className="size-4" />
                            </div>
                            <p className="text-sm font-semibold">
                                Reset Password
                            </p>
                        </div>

                        <ChevronRightIcon className="size-4" />
                    </button>

                    <button className="flex justify-between items-center w-full bg-white border shadow-xs rounded-xs cursor-pointer px-3 py-2 mb-2">
                        <div className="flex justify-start items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <QuestionMarkCircleIcon className="size-4" />
                            </div>
                            <p className="text-sm font-semibold">Get Help</p>
                        </div>

                        <ChevronRightIcon className="size-4" />
                    </button>

                    <button className="flex justify-between items-center w-full bg-white border shadow-xs rounded-xs cursor-pointer px-3 py-2 mb-2">
                        <div className="flex justify-start items-center gap-2">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <ArrowLeftStartOnRectangleIcon className="size-4" />
                            </div>
                            <p className="text-sm font-semibold">Sign Out</p>
                        </div>

                        <ChevronRightIcon className="size-4" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;
