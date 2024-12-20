import React from 'react';
import { useThemeStore } from '../../store/use-theme-store';
import Header from '../header/Header';
import Footer from '../footer/Footer';

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const theme = useThemeStore((state) => state.theme);

    React.useEffect(() => {
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <div className={theme}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;