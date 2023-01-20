// React library methods and hooks
import React from 'react';

// react-router-dom pkg methods, hooks and components
import { Route, Routes } from 'react-router-dom';

// Private routes
import PrivateRoutes from './privateRoutes';

// Custom components
import Header from 'components/Header/Header';

// Screens components
import NoRouteMatch from 'screens/NoRouteMatch/NoRouteMatch';
import HomeDashboard from 'screens/HomeDashboard/HomeDashboard';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Header title={'Advance React Structure'} />}>
        <Route index element={<HomeDashboard greetingMsg={'Home'} />} />
        <Route path="*" element={<NoRouteMatch />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}></Route>
    </Routes>
  )
}

export default index;
