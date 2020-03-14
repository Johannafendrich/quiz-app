import React from 'react';
import './App.css';
import Home from './pages/Home';
import Start from './pages/Start';
import Game from './pages/Game';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="main">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/quiz">
            <Game />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
