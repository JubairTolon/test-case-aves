import React from 'react';
import { useThemeStore } from '../../store/use-theme-store';
import Sidebar from '../sidebar/Sidebar';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const theme = useThemeStore((state) => state.theme);

    React.useEffect(() => {
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className={theme}>
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};

export default DashboardLayout;