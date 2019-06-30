import React from 'react';
import logo from './logo.svg';
import CardComponent from './components/CardComponent';
import './App.css';
import './css/Card.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <CardComponent />
      </div>
    </div>
  );
};

export default App;
