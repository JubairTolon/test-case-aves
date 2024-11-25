import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense } from 'react';
import Loader from './components/loader/Loader';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <Suspense fallback={< Loader />} >
                        <Home />
                    </Suspense>
                )
            },
            {
                path: '/dashboard',
                element: (
                    <Suspense fallback={< Loader />}>
                        <Dashboard />
                    </Suspense>
                )
            },
        ],
    },
]);