import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";
import Home from "./pages/Home/Home";
import DashboardHome from "./pages/dashboard/dashboardHome/DashboardHome";
import Settings from "./pages/dashboard/settings/Settings";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <Suspense fallback={<Loader />}>
                <Dashboard />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<Loader />}>
                        <DashboardHome />
                    </Suspense>
                ),
            },
            {
                path: "settings",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Settings />
                    </Suspense>
                ),
            },
        ],
    },
]);
