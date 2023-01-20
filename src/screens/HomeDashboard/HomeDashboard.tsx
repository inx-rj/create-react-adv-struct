import React from 'react';

interface HomeDashboardProps {
    greetingMsg: string;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({ greetingMsg }) => {
    return (
        <>
            <div>Welcome {greetingMsg}!!</div>
        </>
    );
};

export default HomeDashboard;
