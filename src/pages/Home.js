import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';
import IntroSection from '../components/IntroSection';
import Title from '../components/Title';
import IntroText from '../components/IntroText';

function Home() {
  return (
    <>
      <AppHeader />
      <Card>
        <img
          src="https://images.unsplash.com/photo-1561624485-0e43bcc1836d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
          alt="Cologne"
        />
        <IntroSection>
          <Title>Wie Jeck bist du?</Title>
          <IntroText>
            Was ist eigentlich ein Halver Hahn? Was passiert, wenn d’r Zoch
            kütt? Und wer ist Hennes? Teste dein Wissen und beweise, dass du
            Köln Experte bist!
          </IntroText>

          <button className="buttonLink">
            <Link to="/quiz/1">Start</Link>
          </button>
        </IntroSection>
      </Card>
    </>
  );
}
export default Home;
