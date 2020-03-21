import React from 'react';
import { Link } from 'react-router-dom';
import './Game.css';
import AppHeader from '../components/AppHeader';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';


const QUIZ_API_URL =
  process.env.REACT_APP_QUIZ_API ||
  'https://my-json-server.typicode.com/Johannafendrich/quiz-app/quiz';

function Game() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = React.useState([]);

  React.useEffect(() => {
    async function getQuiz() {
      const response = await fetch(`${QUIZ_API_URL}/${quizId}`);
      const quiz = await response.json();
      setQuiz(quiz);
    }
    getQuiz();
  }, [quizId]);

  async function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <AppHeader />
      <Card>

        <div className="quiz" onSubmit={handleSubmit}>
          <h2 className="question">{quiz?.question}</h2>
          <div className="choice-container">
            <p className="choice-text">{quiz?.choice1}</p>
          </div>
          <div className="choice-container">
            <p className="choice-text">{quiz?.choice2}</p>
          </div>
          <div className="choice-container">
            <p className="choice-text">{quiz?.choice3}</p>
          </div>
          <div className="choice-container">
            <p className="choice-text">{quiz?.choice4}</p>
          </div>
        </div>

        <button className="buttonLink">
          <Link to="/Result">Dein Ergebnis</Link>
        </button>
      </Card>
    </>
  );
}
export default Game;
