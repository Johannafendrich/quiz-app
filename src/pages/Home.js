import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header />
      <button className="button">
        <Link to="/Start">Weiter</Link>
      </button>
    </>
  );
}
export default Home;
