import React from 'react';

interface FooterProps {
    title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
    return (
        <>
            <footer className='bg-black border border-gray-400 text-center p-3'>
                {title}
            </footer>
        </>
    );
};

export default Footer;
