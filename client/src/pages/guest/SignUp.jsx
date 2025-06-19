import { UserRound, Eye, LogIn, AtSign } from "lucide-react";
import { NavLink } from "react-router";

const SignUp = () => {
    return (
        <div>
            <div className="mb-5">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2AmyQwjzagHtKMRp-sOc1N4CQCyD9mpGbQ&s"
                    alt="Logo"
                    className="w-22 mx-auto mb-4"
                />
                <h1 className="text-[20px] text-center font-bold mb-[2px]">
                    Welcome to Cheque Mate!
                </h1>
                <p className="text-xs font-light text-center">
                    Please log in using the form below.
                </p>
            </div>

            <fieldset className="fieldset">
                <label for="name" className="fieldset-legend font-medium py-1">
                    Full Name *
                </label>
                <label className="input w-full mt-0">
                    <UserRound strokeWidth={1.5} size={18} />
                    <input type="text" id="name" placeholder="John Doe" />
                </label>
            </fieldset>

            <fieldset className="fieldset">
                <label for="email" className="fieldset-legend font-medium py-1">
                    Email Address *
                </label>
                <label className="input w-full mt-0">
                    <AtSign strokeWidth={1.5} size={18} />
                    <input
                        type="email"
                        id="email"
                        placeholder="john.doe@gmail.com"
                    />
                </label>
            </fieldset>

            <fieldset className="fieldset">
                <label
                    for="password"
                    className="fieldset-legend font-medium py-1"
                >
                    Password *
                </label>
                <label className="input w-full mt-0">
                    <Eye strokeWidth={1.5} size={18} />
                    <input type="password" id="password" placeholder="******" />
                </label>
            </fieldset>

            <fieldset className="fieldset">
                <label
                    for="confirmPassword"
                    className="fieldset-legend font-medium py-1"
                >
                    Confirm Password *
                </label>
                <label className="input w-full mt-0">
                    <Eye strokeWidth={1.5} size={18} />
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="******"
                    />
                </label>
            </fieldset>

            <fieldset class="fieldset">
                <label class="label">
                    <input type="checkbox" class="checkbox checkbox-xs" />I
                    accept the terms & conditions
                </label>
            </fieldset>

            <div className="text-center">
                <button class="btn btn-primary w-full sm:max-w-64 md:min-w-full mt-5">
                    <LogIn strokeWidth={1.6} size={15} />
                    Sign Up
                </button>
            </div>

            <p className="text-xs text-center mt-10">
                Already have an account?
                <NavLink to="/sign-in" className="link ml-1">
                    Sign In!
                </NavLink>
            </p>
        </div>
    );
};

export default SignUp;
