import React from 'react';

// react-router-dom pkg methods, hooks and components
import { Outlet } from 'react-router-dom';

// Custom components
import Footer from 'components/Footer/Footer';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <>
            <header style={{ textAlign: "center", border: "1px solid #ccc", padding: '12px' }}>
                {title}
            </header>
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>
            <Footer title={'Footer Component'} />
        </>
    );
};

export default Header;
