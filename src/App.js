import React from 'react';
import './App.css';
import Home from './pages/Home';
import Start from './pages/Start';
import Game from './pages/Game';
import Result from './pages/Result';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/quiz/:quizId">
            <Game />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
