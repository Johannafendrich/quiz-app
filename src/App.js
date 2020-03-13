import React from 'react';
import Header from './components/Header';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="main"> </main>
    </Router>
  );
}

export default App;
