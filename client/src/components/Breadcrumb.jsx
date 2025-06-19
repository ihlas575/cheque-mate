import { ArrowLeft, CalendarDays, WalletCards } from "lucide-react";

const Breadcrumb = () => {
    return (
        <div className="flex justify-between items-center py-3 bg-white px-4 border-b border-gray-200">
            <button className="btn btn-circle w-8 h-8">
                <ArrowLeft strokeWidth={1.4} size={16} />
            </button>

            <h1 className="flex items-center gap-2 text-sm">
                <WalletCards strokeWidth={1.8} size={16} />
                Wallet
            </h1>

            <button className="btn btn-circle w-8 h-8">
                <CalendarDays strokeWidth={1.4} size={16} />
            </button>
        </div>
    );
};

export default Breadcrumb;
