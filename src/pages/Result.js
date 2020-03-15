import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';
import './Result.css';

function Result() {
  return (
    <>
      <Header />
      <Card>
        <div className="quiz">
          <h2 className="result">Glückwunsch, du bist ein echter Jeck!</h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1561624485-0e43bcc1836d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
          alt="Cologne"
        />
        <button className="buttonLink">
          <Link to="/Home">Neues Quiz starten</Link>
        </button>
      </Card>
    </>
  );
}
export default Result;
