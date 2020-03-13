import React from 'react';
import './Header.css';
import quizLogo from './quizLogo.png';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Cologne Quiz</h1>
      <img className="logo" src={quizLogo} alt="logo" />
    </header>
  );
}

export default Header;
