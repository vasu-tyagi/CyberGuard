import React, { useEffect, useRef, useState } from 'react';
import commandsData from './commands.json';

const Terminal = () => {
  const [currentScreen, setCurrentScreen] = useState('terminal');
  const [terminalCommands, setTerminalCommands] = useState([]);
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [commandHistoryIndex, setCommandHistoryIndex] = useState(-1);

  const terminalRef = useRef(null);

  useEffect(() => {
    const storedHistory = localStorage.getItem('commandHistory');
    if (storedHistory) {
      setCommandHistory(JSON.parse(storedHistory));
    }
    setTerminalCommands(commandsData);
  }, []);
  

  const showScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (terminalInput.trim() === '') {
      return;
    }

    const command = terminalInput.trim();
    let output = '';

    if (command === 'clear -c') {
      localStorage.removeItem('commandHistory');
      setCommandHistory([]);
      setTerminalCommands([]);
    } else if (command === 'clear') {
      setTerminalCommands([]);
    } else {
      const matchedCommand = terminalCommands.find((cmd) => cmd.command === command);
      if (matchedCommand) {
        output = matchedCommand.output;
      } else {
        output = `Command not found: ${command}`;
      }

      const newCommandHistory = [...commandHistory, command];
      setCommandHistory(newCommandHistory);
      setTerminalCommands([...terminalCommands, { command: `user@host:~$ ${command}`, output }]);
      localStorage.setItem('commandHistory', JSON.stringify(newCommandHistory));
    }

    setTerminalInput('');
    setCommandHistoryIndex(-1);

    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const handleInputChange = (e) => {
    setTerminalInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistoryIndex < commandHistory.length - 1) {
        setCommandHistoryIndex(commandHistoryIndex + 1);
        setTerminalInput(commandHistory[commandHistory.length - 1 - commandHistoryIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistoryIndex >= 0) {
        setCommandHistoryIndex(commandHistoryIndex - 1);
        if (commandHistoryIndex === 0) {
          setTerminalInput('');
        } else {
          setTerminalInput(commandHistory[commandHistory.length - 1 - commandHistoryIndex + 1]);
        }
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalCommands]);

  return (
    <div className="terminalScreen">
      <div className="terminal" ref={terminalRef}>
        <div className="terminal-content">
          <pre>
            {terminalCommands.map((item, index) => (
              <div key={index}>
                <span className="command">{item.command}</span>
                {item.output && <div className="output">{item.output}</div>}
              </div>
            ))}
            <div className="terminal-input">
              <span className="prompt">user@host:~$ </span>
              <input
                type="text"
                value={terminalInput}
                onChange={handleInputChange}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleTerminalSubmit(e);
                  }
                }}
                onKeyDown={handleKeyDown}
                autoFocus
                className="inputField"
              />
            </div>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
