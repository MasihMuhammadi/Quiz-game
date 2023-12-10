import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "Who is the GOAT?",
      answers: [
        { text: "Messi", correct: true },
        { text: "Ronaldo", correct: false },
        { text: "Neymar", correct: false },
        { text: "Mbappé", correct: false },
      ],
    },
    {
      question: "Is the Earth round?",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false },
      ],
    },
    {
      question: "What is the capital of Japan?",
      answers: [
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Seoul", correct: false },
        { text: "Bangkok", correct: false },
      ],
    },
    {
      question: "Is JavaScript a programming language?",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      question: "What is the largest mammal?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false },
      ],
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "South Korea", correct: false },
        { text: "Thailand", correct: false },
      ],
    },
  ]);

  const [i, setI] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("answer");
  const [isClicked, setIsClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [chances, setChances] = useState(3);

  const nextQuestion = () => {
    setIsClicked(false);
    setCorrectAnswer("answer");

    if (i < questions.length - 1) {
      setI(i + 1);
    } 
  };



  const checkCorrect = (text, index) => {
    if (!isClicked) {
      setIsClicked(true);
      if (text.correct === true) {
        
        setCorrectAnswer('answer');
        setScore((prevScore) => prevScore + 1);
      } else {
        
        setCorrectAnswer('bg-danger');
        setChances((prevChances) => prevChances - 1);
      }
    }
  };

  const resetGame = () => {
    setI(0);
    setScore(0);
    setChances(3);
    setIsClicked(false);
    setCorrectAnswer("answer");
  };

  return (
    <>
      <div className="container">
        <div className="game-container">
          <p>
            {i < questions.length
              ? questions[i].question
              : "Questions are finished"}
          </p>
          {questions[i].answers.map((text, index) => (
            <ul key={index}>
              <li
                className={`mx-4 ${
                  correctAnswer
                } ${isClicked && text.correct ? "bg-success rounded text-white" : ""}`}
                onClick={() => checkCorrect(text, index)}
              >
                {text.text}
              </li>
            </ul>
          ))}
          <button
            className="btn btn-primary mt-5"
            disabled={!isClicked || i === questions.length || chances === 0}
            onClick={nextQuestion}
          >
            Next
          </button>
          {i === questions.length && <p>Game Over! Questions are finished.</p>}
          {chances === 0 && (
            <p>Game Over! You ran out of chances. Your final score: {score}</p>
          )}
          <p>Score: {score}</p>
          <p>Chances Left: {chances}</p>
          {i === questions.length || chances === 0 ? (
            <button className="btn btn-primary" onClick={resetGame}>
              Reset Game
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
