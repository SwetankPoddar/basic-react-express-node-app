import React from 'react';
import logo from './logo.svg';
import './App.css';

import Customers from './components/customers/customers';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Customers />
    </div>
  );
}

export default App;