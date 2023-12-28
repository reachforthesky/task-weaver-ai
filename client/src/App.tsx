import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './AppRoutes'; 
import NavHeader from './components/NavHeader';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavHeader />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
