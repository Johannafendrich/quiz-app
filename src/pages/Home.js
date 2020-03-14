import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Header />
      <Card></Card>
      <button className="button">
        <Link to="/Start">Weiter</Link>
      </button>
    </>
  );
}
export default Home;
