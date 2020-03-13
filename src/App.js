import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Start from './pages/Start';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <main className="main">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
