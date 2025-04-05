import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import "swiper/css/bundle";
import "swiper/css/effect-creative";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCreative } from "swiper/modules";
import { NavLink } from "react-router";

const Login = () => {
    return (
        <div className="min-w-full sm:min-w-8/12 md:min-w-6/12 lg:min-w-11/12 xl:min-w-9/12 min-h-screen sm:min-h-auto bg-white sm:rounded-lg sm:border sm:shadow-lg pt-14 pb-6 px-5 sm:px-8 mx-auto sm:my-10">
            <h1 className="title text-center text-2xl mb-1">Welcome Back!</h1>
            <p className="text-center text-sm">
                Please enter your details to gain access.
            </p>

            <div className="mt-10">
                <div className="grid w-full items-center gap-1.5 mb-4">
                    <Label htmlFor="email">Email Address:</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@gmail.com"
                        className="px-4 py-5 !rounded-sm"
                    />
                </div>

                <div className="grid w-full items-center gap-1.5 mb-5">
                    <Label htmlFor="password">Password:</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="******"
                        className="px-4 py-5 !rounded-sm"
                    />

                    <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="rememberMe" />
                            <label
                                htmlFor="rememberMe"
                                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember Me
                            </label>
                        </div>

                        <Button
                            variant="link"
                            className="cursor-pointer text-end p-0"
                        >
                            Forgot Password?
                        </Button>
                    </div>
                </div>

                <Button className="w-full cursor-pointer py-5">Login</Button>

                <p className="text-center text-sm font-semibold mt-8">
                    Don't Have an Account?{" "}
                    <NavLink to="/sign-up">
                        <Button
                            variant="link"
                            className="ml-1 p-0 cursor-pointer"
                        >
                            Register Now!
                        </Button>
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
