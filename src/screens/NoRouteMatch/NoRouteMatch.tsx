import React from 'react';

// react-router-dom pkg methods, hooks and components
import { Link } from 'react-router-dom';

const NoRouteMatch = () => {
    return (
        <div style={{ color: "white" }}>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default NoRouteMatch;