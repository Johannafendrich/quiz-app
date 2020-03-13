import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

function Start() {
  return (
    <div>
      <button class="button">
        <Link to="/Home">Weiter geht's</Link>
      </button>
    </div>
  );
}
export default Start;
