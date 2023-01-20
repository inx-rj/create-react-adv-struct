// React library methods and hooks
import React from 'react';

// Navigation managmenet and shows clean URLs
import { BrowserRouter } from 'react-router-dom';

// Custom routes
import Routes from 'routes/index';


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
