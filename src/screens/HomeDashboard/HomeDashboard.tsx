import React from 'react';

// Components of TailwindCss related pkg

interface HomeDashboardProps {
    greetingMsg: string;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({ greetingMsg }) => {

    return (
        <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        </div>
    );
};

export default HomeDashboard;
