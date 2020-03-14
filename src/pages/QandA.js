import React from 'react';
import { Link } from 'react-router-dom';
import './QandA.css';
import Header from '../components/Header';
// import Card from '../components/Card';

function Quiz() {
  return (
    <>
      <Header />
      {/* //   <Card> */}

      <form className="form">
        <input
          className="form__input form__input-question"
          type="text"
          placeholder="Enter question"
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="First answer"
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Second answer"
        />
        <input
          className="form__input form__input-answer"
          type="text"
          placeholder="Third answer"
        />
      </form>

      {/* // </Card> */}

      <button className="button">
        <Link to="/Home">Weiter</Link>
      </button>
    </>
  );
}

export default Quiz;
