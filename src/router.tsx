import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './components/loader/Loader';
import Home from './pages/Home/Home';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardHome from './pages/dashboard/DashboardHome';
import Settings from './pages/dashboard/settings/Settings';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={<Loader />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: '/dashboard',
                element: (
                    <Suspense fallback={<Loader />}>
                        <Dashboard />
                    </Suspense>
                ),
                children: [
                    {
                        path: '',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <DashboardHome />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'settings',
                        element: (
                            <Suspense fallback={<Loader />}>
                                <Settings />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);
