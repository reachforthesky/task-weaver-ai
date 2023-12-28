import React from 'react';
import { Route, Routes} from 'react-router-dom';
import TaskView from './views/Tasks/TaskView';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<TaskView />} />
        <Route path="/tasks" element={<TaskView />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;