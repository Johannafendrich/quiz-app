import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import LogoBig from '../components/LogoBig';

function Start() {
  return (
    <>
      <Link to="/Home">
        <LogoBig />
      </Link>
    </>
  );
}
export default Start;
