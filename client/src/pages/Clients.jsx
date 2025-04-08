import BottomBar from "@/components/BottomBar";
import ClientCard from "@/components/ClientCard";
import Header from "@/components/Header";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Clients = () => {
    return (
        <>
            <Header
                title="Clients"
                links={[
                    {
                        title: "Add New Client",
                        url: "/clients/add",
                        icon: <PlusCircleIcon className="size-5" />,
                    },

                    {
                        title: "Search",
                        url: "/search",
                        icon: <MagnifyingGlassIcon className="size-5" />,
                    },

                    {
                        title: "Profile",
                        url: "/profile",
                        icon: <UserCircleIcon className="size-5" />,
                    },
                ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                <ClientCard
                    name="Okray Bathik"
                    isActive={1}
                    logo="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                />
                <ClientCard
                    name="Global Sasi"
                    isActive={0}
                    logo="https://photosgreet.com/wp-content/uploads/instagram-profile-picture-for-girls-couple_31.webp"
                />
                <ClientCard name="Okray Silk" isActive={1} />
                <ClientCard name="Sanjeeva" isActive={1} />
                <ClientCard
                    name="Ahmed"
                    isActive={0}
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVxC0LXC_OOUv5rc8cO2GDvVHxrxrqR5raNrWlTAbk5LzzOAFskZOtrejrDPV1LQ92ac&usqp=CAU"
                />
                <ClientCard
                    name="Silk Garden"
                    isActive={0}
                    logo="https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918808292-YGT6VQPEAF6EO8I4MVVF/Majintha-4.jpg"
                />
                <ClientCard name="Silk House" isActive={1} />
            </div>

            <BottomBar />
        </>
    );
};

export default Clients;
