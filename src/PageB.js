import React from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Terminal from './Terminal';
import WebsiteContent from './WebsiteContent';
import DatabaseScreen from './DatabaseScreen';
import Inbox from './Inbox';
import MobileApp from './MobileApp'

const PageB = () => {
  return (
    <div className="page-b-container">
      <div className="side-panel">
        <nav>
          <ul>
            <li>
              <Link to="terminal">Terminal</Link>
            </li>
            <li>
              <Link to="website">Website</Link>
            </li>
            <li>
              <Link to="database">Database</Link>
            </li>
            <li>
              <Link to="inbox">Inbox</Link>
            </li>
            <li>
              <Link to="mobileapp">Mobile App</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<h3>Please select an option from the side panel.</h3>} />
          <Route path="terminal" element={<Terminal />} />
          <Route path="website" element={<WebsiteContent />} />
          <Route path="database" element={<DatabaseScreen />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="mobileapp" element={<MobileApp />} />
        </Routes>
      </div>
    </div>
  );
};

export default PageB;
