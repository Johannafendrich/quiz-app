import React from 'react';
import { Link } from 'react-router-dom';
import './Game.css';
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';

function Quiz() {
  return (
    <>
      <AppHeader />
      <Card>
        <div className="quiz">
          <h2 className="question">
            This is an awesome Question – do you now the Answer?
          </h2>
          <div className="choice-container">
            <p className="choice-text">Choice 1</p>
          </div>
          <div className="choice-container">
            <p className="choice-text">Choice 2</p>
          </div>
          <div className="choice-container">
            <p className="choice-text">Choice 3</p>
          </div>
          <div className="choice-container">
            <p className="choice-text">Choice 4</p>
          </div>

          <button className="buttonLink">
            <Link to="/Result">Dein Ergebnis</Link>
          </button>
        </div>
      </Card>
    </>
  );
}

export default Quiz;
