import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <button className="button">
        <Link to="/Start">Lets Start</Link>
      </button>
    </div>
  );
}
export default Home;
