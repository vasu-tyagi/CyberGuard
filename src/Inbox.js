import React, { useState } from 'react';
import './App.css';
import emailData from './emails.json';

const Inbox = () => {
  const [emails] = useState(emailData);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleCloseModal = () => {
    setSelectedEmail(null);
  };

  return (
    <div className="inbox">
      <h2 className="inbox-title">Inbox</h2>
      <div className="email-list">
        {emails.map((email) => (
          <div
            key={email.id}
            className="email-item"
            onClick={() => handleEmailClick(email)}
          >
            <div className="email-sender">{email.sender}</div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-date">{email.date}</div>
          </div>
        ))}
      </div>
      {selectedEmail && (
        <div className="email-modal">
          <div className="email-modal-content">
            <div className="email-modal-header">
              <span className="email-modal-subject">{selectedEmail.subject}</span>
              <span className="email-modal-close" onClick={handleCloseModal}>
                &times;
              </span>
            </div>
            <div className="email-modal-sender">{selectedEmail.sender}</div>
            <div className="email-modal-date">{selectedEmail.date}</div>
            <div className="email-modal-message">{selectedEmail.message}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
