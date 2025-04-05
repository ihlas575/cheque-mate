import {
    CircleUserRound,
    LayoutDashboard,
    ShoppingBag,
    SquareUserRound,
    Tickets,
} from "lucide-react";

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
    },
    {
        title: "Cheques",
        url: "#",
        icon: Tickets,
    },
    {
        title: "Clients",
        url: "/clients",
        icon: SquareUserRound,
    },
    {
        title: "Trades",
        url: "/trades",
        icon: ShoppingBag,
    },
    {
        title: "Profile",
        url: "/profile",
        icon: CircleUserRound,
    },
];

export default function AppSidebar() {
    const location = useLocation();
    console.log(location);

    return (
        <Sidebar>
            <SidebarHeader className="mt-4 px-4">
                <a href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pinterest_Logo.svg/1200px-Pinterest_Logo.svg.png"
                        alt="Logo"
                        className="max-h-10 me-auto"
                    />
                </a>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        className="p-5 !rouned-none"
                                        asChild
                                        isActive={
                                            item.url === location.pathname
                                        }
                                    >
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
