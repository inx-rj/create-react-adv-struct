import React from 'react';

// react-router-dom pkg methods, hooks and components
import { Outlet } from 'react-router-dom';

// Custom components
import Footer from 'components/Footer/Footer';

interface HeaderProps {
    title: string;
}

// Note: Follow the sequence of classname as below,
// '<position> <h/w/> <bg> <border> <font> <p/m>'

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div>
            <header className='sticky top-0 right-0 left-0 bg-black border border-gray-400 text-center p-3'>
                {title}
            </header>
            <main className='p-4'>
                {/* <div className="rounded-lg border-4 border-dashed border-gray-300 text-center sm:text-start m-5 p-3"> */}
                <Outlet />
                {/* </div> */}
            </main>
            <Footer title={'Footer Component'} />
        </div>
    );
};

export default Header;
