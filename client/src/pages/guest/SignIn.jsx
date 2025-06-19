import { UserRound, Eye, LogIn } from "lucide-react";
import { NavLink } from "react-router";

const SignIn = () => {
    return (
        <div>
            <div className="mb-5">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2AmyQwjzagHtKMRp-sOc1N4CQCyD9mpGbQ&s"
                    alt="Logo"
                    className="w-22 mx-auto mb-4"
                />
                <h1 className="text-[20px] text-center font-bold mb-[1px]">
                    Welcome to Cheque Mate!
                </h1>
                <p className="text-xs font-light text-center">
                    Please log in using the form below.
                </p>
            </div>

            <form>
                <fieldset className="fieldset">
                    <label
                        for="email"
                        className="fieldset-legend font-medium py-1"
                    >
                        Email Address *
                    </label>
                    <label className="input w-full text-sm mt-0">
                        <UserRound strokeWidth={1.5} size={18} />
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
                    <label className="input w-full text-sm mt-0">
                        <Eye strokeWidth={1.5} size={18} />
                        <input
                            type="password"
                            id="password"
                            placeholder="******"
                        />
                    </label>
                </fieldset>

                <div className="flex justify-between items-center mt-1">
                    <fieldset class="fieldset">
                        <label class="label">
                            <input
                                type="checkbox"
                                class="checkbox checkbox-xs"
                            />
                            Remember Me
                        </label>
                    </fieldset>

                    <a
                        href="/forgot-password"
                        class="link text-xs text-primary"
                    >
                        Forgot Password?
                    </a>
                </div>

                <button class="btn btn-primary w-full text-[12px] font-semibold mt-5">
                    <LogIn strokeWidth={1.75} size={15} />
                    Sign In
                </button>
            </form>

            <p className="text-sm text-center mt-10">
                Don't have an account?
                <NavLink to="/sign-up" className="link text-primary ml-1">
                    Sign Up!
                </NavLink>
            </p>
        </div>
    );
};

export default SignIn;
