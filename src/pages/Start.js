import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import quizLogo from '../components/quizLogo.png';

function Start() {
  return (
    <>
      <Link to="/Home">
        <img className="startLogo" src={quizLogo} alt="logo" />
      </Link>
    </>
  );
}
export default Start;
