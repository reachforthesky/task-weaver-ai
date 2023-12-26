import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/NavHeader';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavHeader />
      {/* Rest of your application components go here */}
    </div>
  );
};

export default App;
