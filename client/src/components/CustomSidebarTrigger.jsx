import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export default function CustomSidbarTrigger() {
    const { toggleSidebar } = useSidebar();

    return (
        <button onClick={toggleSidebar}>
            <Menu />
        </button>
    );
}
