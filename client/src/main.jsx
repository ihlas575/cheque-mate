import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Layouts
import GuestLayout from "./layouts/GuestLayout.jsx";
import AppLayout from "./layouts/AppLayout.jsx";

// Guest Pages
import SignIn from "./pages/guest/SignIn.jsx";
import SignUp from "./pages/guest/SignUp.jsx";
import ForgotPassword from "./pages/guest/ForgotPassword.jsx";

// Auth Pages
import Home from "./pages/Home.jsx";
import Clients from "./pages/Clients.jsx";
import MoreSetting from "./pages/MoreSetting.jsx";
import Cheques from "./pages/Cheques.jsx";
import Trades from "./pages/Trades.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="cheques" element={<Cheques />} />
                <Route path="clients" element={<Clients />} />
                <Route path="trades" element={<Trades />} />
                <Route path="more-settings" element={<MoreSetting />} />
            </Route>

            <Route element={<GuestLayout />}>
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
