import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Header />
      <Card>
        <button className="buttonLink">
          <Link to="/Quiz">Weiter</Link>
        </button>
      </Card>
    </>
  );
}
export default Home;
