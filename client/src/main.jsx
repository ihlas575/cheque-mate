import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Layouts
import GuestLayout from "./layouts/GuestLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Clients from "./pages/Clients.jsx";
import Trades from "./pages/Trades.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./pages/guest/Login.jsx";
import Register from "./pages/guest/Register.jsx";
import ForgotPassword from "./pages/guest/ForgotPassword.jsx";
import Cheques from "./pages/Cheques.jsx";

// Global CSS
import "./assets/css/custom.css";
import Deposits from "./pages/Deposits.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route element={<GuestLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="sign-up" element={<Register />} />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                    />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route index element={<Home />} />
                    <Route path="cheques" element={<Cheques />} />
                    <Route path="deposits" element={<Deposits />} />
                    <Route path="clients" element={<Clients />} />
                    <Route path="trades" element={<Trades />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);
