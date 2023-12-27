import React from 'react';
import { Route, Routes} from 'react-router-dom';
import TaskViewer from './components/Tasks/TaskViewer';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<TaskViewer />} />
        <Route path="/tasks" element={<TaskViewer />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;