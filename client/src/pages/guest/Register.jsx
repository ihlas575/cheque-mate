import React from "react";
import { NavLink } from "react-router";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register = () => {
    return (
        <div className="min-w-full sm:min-w-8/12 md:min-w-6/12 lg:min-w-11/12 xl:min-w-9/12 min-h-screen sm:min-h-auto bg-white sm:rounded-lg sm:border sm:shadow-lg pt-14 pb-6 px-5 sm:px-8 mx-auto sm:my-10">
            <h1 className="title text-center text-2xl mb-1">
                Create an Account
            </h1>
            <p className="text-center text-sm">
                Please enter your details to gain access.
            </p>

            <div className="mt-10">
                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="fullname">Full Name:</Label>
                    <Input
                        id="fullname"
                        type="text"
                        placeholder="Ex: John Doe"
                        className="px-4 py-5 !rounded-sm"
                    />
                </div>

                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="businessName">Company Name:</Label>
                    <Input
                        id="businessName"
                        type="text"
                        placeholder="Ex: Starbuck Inc."
                        className="px-4 py-5 !rounded-sm"
                    />
                </div>

                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Email Address:</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Ex: john.doe@gmail.com"
                        className="px-4 py-5 !rounded-sm"
                    />
                </div>

                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="password">Password:</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="******"
                        className="px-4 py-5 !rounded-sm"
                    />
                </div>

                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="confirmPassword">Confirm Password:</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="******"
                        className="px-4 py-5 !rounded-sm"
                    />
                </div>

                <div className="flex items-center space-x-2 mb-8">
                    <Checkbox id="termsAndConditions" />
                    <Label
                        htmlFor="termsAndConditions"
                        className="text-sm font-medium leading-none cursor-pointer peer-disabled:opacity-70"
                    >
                        I accept and agree to the terms & conditions
                    </Label>
                </div>

                <Button className="w-full cursor-pointer py-5">Sign Up</Button>

                <p className="text-center text-sm font-semibold mt-8">
                    Don't Have an Account?{" "}
                    <NavLink to="/login">
                        <Button
                            variant="link"
                            className="ml-1 p-0 cursor-pointer"
                        >
                            Sign In
                        </Button>
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
