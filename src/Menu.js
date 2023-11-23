import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    navigate(`/page-b/${option}`);
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-options">
        <button onClick={() => handleOptionClick('A')}>Option A</button>
        <button onClick={() => handleOptionClick('B')}>Option B</button>
        <button onClick={() => handleOptionClick('C')}>Option C</button>
        <button onClick={() => handleOptionClick('D')}>Option D</button>
      </div>
    </div>
  );
};

export default Menu;
