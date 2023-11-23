// MobileApp.js
import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <div className="sc-box">
      <div className="sc-container">
        <h1 className="sc-main-title">Test Title</h1>
        <div className="sc-searchbox">
          <input required type="text" className="sc-searchbox-field" />
          <div className="sc-searchbox-placeholder">
            <i className="sc-searchbox-placeholder-icon fas fa-search"></i>
            <p className="sc-searchbox-placeholder-text">Search placeholder</p>
          </div>
        </div>
      </div>
      <div className="sc-container sc-timeline">
        <div className="sc-timeline-item" event="launch">
          <i className="sc-timeline-icon fas fa-utensils"></i>
          <div className="sc-timeline-info">
            <div className="sc-timeline-details">
              <span className="sc-timeline-time">test 1</span>
              <span className="sc-timeline-duration">test 2</span>
            </div>
            <h3 className="sc-timeline-title">Test 1</h3>
          </div>
        </div>
        <div className="sc-timeline-item sc-actionsheet-trigger" event="meeting" goto="meeting">
          <i className="sc-timeline-icon fas fa-comments"></i>
          <div className="sc-timeline-info">
            <div className="sc-timeline-details">
              <span className="sc-timeline-time">test 3</span>
              <span className="sc-timeline-duration">test 4</span>
            </div>
            <h3 className="sc-timeline-title">Test 2</h3>
          </div>
        </div>
        <div className="sc-timeline-item" event="meeting">
          <i className="sc-timeline-icon fas fa-comments"></i>
          <div className="sc-timeline-info">
            <div className="sc-timeline-details">
              <span className="sc-timeline-time">test 5</span>
              <span className="sc-timeline-duration">test 6</span>
            </div>
            <h3 className="sc-timeline-title">Test 3</h3>
          </div>
        </div>
      </div>
      <div className="sc-bottom-bar">
        <a className="sc-menu-item sc-current">
          <i className="fas fa-list"></i>
        </a>
        <a className="sc-fab">
          <i className="fas fa-plus"></i>
        </a>
        <a className="sc-menu-item">
          <i className="fas fa-calendar-alt"></i>
        </a>
      </div>
      <div className="sc-actionsheet-container" id="meeting">
        <div className="sc-overlay"></div>
        <div type="event" className="sc-actionsheet">
          {/* Actionsheet content for meeting goes here */}
        </div>
      </div>
      <div className="sc-actionsheet-container" id="meeting-actions">
        <div className="sc-overlay"></div>
        <div className="sc-actionsheet">
          {/* Actionsheet content for meeting actions goes here */}
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
