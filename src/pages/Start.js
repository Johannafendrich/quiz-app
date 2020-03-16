import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import Logo from '../components/Logo';

function Start() {
  return (
    <>
      <Link to="/Home">
        <Logo />
      </Link>
    </>
  );
}
export default Start;
