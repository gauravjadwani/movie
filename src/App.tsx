import React from 'react';
import logo from './logo.svg';
import PaperComponent from './components/PaperComponent';
import './App.css';
// import './css/Card.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <PaperComponent />
      </div>
    </div>
  );
};

export default App;
