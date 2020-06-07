import React from 'react';
import NavBar from './components/navbar';

import Routes from './routes';


function App() {
  return (
    <div className="container">
      <NavBar/>
      <Routes/>
    </div>
  );
}

export default App;
