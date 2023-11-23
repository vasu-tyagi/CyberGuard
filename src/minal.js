import React, { useEffect, useRef } from 'react';
import './App.css';

const Terminal = ({ commands, terminalInput, setTerminalInput, handleCommand, terminalRef }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setTerminalInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(terminalInput);
      setTerminalInput('');
    }
  };

  return (
    <div className="terminal" ref={terminalRef}>
      {/* Display Terminal Commands and Output */}
      <div className="output">
        {commands.map((command, index) => (
          <div key={index}>{command}</div>
        ))}
      </div>

      {/* Input Area */}
      <div className="input">
        <span>$ </span>
        <input
          type="text"
          value={terminalInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Terminal;
