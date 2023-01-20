import React from 'react';

interface FooterProps {
    title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
    return (
        <>
            <footer style={{ textAlign: "center", border: "1px solid #ccc", padding: '12px' }}>
                {title}
            </footer>
        </>
    );
};

export default Footer;
