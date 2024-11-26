import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import DashboardHeader from '../dashboardHeader/DashboardHeader';
import { useThemeStore } from '../../store/use-theme-store';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const theme = useThemeStore((state) => state.theme);

    React.useEffect(() => {
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className="flex flex-col h-screen">
            <DashboardHeader />
            <div className="flex flex-grow overflow-hidden">
                <Sidebar />
                <main className="flex-grow overflow-auto bg-[#f1f1f1] dark:bg-gray-950 text-gray-800 dark:text-white min-h-[100dvh] p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
