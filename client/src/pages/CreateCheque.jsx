import NestedPageHeader from "@/components/NestedPageHeader";
import { Input } from "@/components/ui/input";
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";

const CreateCheque = () => {
    return (
        <>
            <NestedPageHeader title="New Cheque" />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <form>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateCheque;
