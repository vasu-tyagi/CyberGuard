import React from 'react';
import './App.css';
import data from './data.json'; // Import data from the JSON file

const DatabaseScreen = () => {
  return (
    <div className="database-screen">
      <h2>Database Screen</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatabaseScreen;
