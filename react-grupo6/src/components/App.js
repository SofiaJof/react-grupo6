import React from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import "../assets/css/App.css";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
      <div id="wrapper">
       <Sidebar/>
        <Dashboard/>
      </div>
    </BrowserRouter>
</React.Fragment>
  );
}

export default App;
