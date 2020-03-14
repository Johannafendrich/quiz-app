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
        <img
          src="https://images.unsplash.com/photo-1561624485-0e43bcc1836d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
          alt="Cologne"
        />
        <section className="intro">
          <h1>Wie Jeck bist du?</h1>
          <p>
            Was ist eigentlich ein Halver Hahn? Was passiert, wenn d’r Zoch
            kütt? Und wer ist Hennes? Teste dein Wissen und beweise, dass du
            Köln Experte bist!
          </p>

          <button className="buttonLink">
            <Link to="/Quiz">Start</Link>
          </button>
        </section>
      </Card>
    </>
  );
}
export default Home;
