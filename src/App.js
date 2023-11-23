import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Menu from './Menu';
import Terminal from './Terminal';
import WebsiteFrame from './WebsiteFrame';
import DatabaseScreen from './DatabaseScreen';
import Inbox from './Inbox';
import MobileApp from './MobileApp'
import PageB from './PageB';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <div className="app">
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/page-b/*" element={<PageB />} />
            <Route path="/menu/terminal" element={<Terminal />} />
            <Route path="/menu/website" element={<WebsiteFrame />} />
            <Route path="/menu/database" element={<DatabaseScreen />} />
            <Route path="/menu/inbox" element={<Inbox />} />
            <Route path="/menu/mobileapp" element={<MobileApp />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={() => setLoggedIn(true)} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
