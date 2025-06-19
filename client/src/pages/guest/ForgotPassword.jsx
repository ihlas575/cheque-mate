import { AtSign, RotateCcw } from "lucide-react";
import { NavLink } from "react-router";

const ForgotPassword = () => {
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
                    <label className="input w-full mt-0">
                        <AtSign strokeWidth={1.5} size={18} />
                        <input
                            type="email"
                            id="email"
                            placeholder="john.doe@gmail.com"
                        />
                    </label>
                </fieldset>

                <button class="btn btn-primary w-full text-[12px] font-semibold mt-5">
                    <RotateCcw strokeWidth={1.75} size={15} />
                    Reset Password
                </button>
            </form>

            <p className="text-sm text-center mt-10">
                Go back to
                <NavLink to="/sign-up" className="link text-primary ml-1">
                    Sign In!
                </NavLink>
            </p>
        </div>
    );
};

export default ForgotPassword;
