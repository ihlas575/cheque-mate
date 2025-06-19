import Breadcrumb from "../components/Breadcrumb";
import ChequeSheet from "../components/ChequeSheet";

const Cheques = () => {
    return (
        <div className="">
            <Breadcrumb />

            <div className="grid gap-4 pt-3 pb-5 px-3">
                <ChequeSheet
                    clientName="Global Silk"
                    issueDate="12/02/2025"
                    amount="1,200,000.00"
                    status="Issued"
                    dueDate="29/07/2025"
                    bank="Commercial Bank"
                    chequeNo="967483"
                />
                <ChequeSheet
                    clientName="Sanjeeva"
                    issueDate="28/06/2025"
                    amount="375,000.00"
                    status="Pending"
                    dueDate="18/11/2025"
                    bank="Bank of Ceylon"
                    chequeNo="728422"
                />
                <ChequeSheet
                    clientName="Okray Bathik"
                    issueDate="15/09/2025"
                    amount="885,000.00"
                    status="Paid"
                    dueDate="30/10/2025"
                    bank="Sampath Bank"
                    chequeNo="245686"
                />
            </div>
        </div>
    );
};

export default Cheques;
