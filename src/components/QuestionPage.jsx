import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo_supercars.svg";

const QuestionPage = ({
  question,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    // Create array of answers and shuffle them
    const answers = [
      { text: question.correct, isCorrect: true, label: "a" },
      { text: question.incorrect1, isCorrect: false, label: "b" },
      { text: question.incorrect2, isCorrect: false, label: "c" },
    ];

    // Shuffle the answers array
    const shuffled = [...answers].sort(() => Math.random() - 0.5);

    // Assign new labels after shuffling
    const labeledAnswers = shuffled.map((answer, index) => ({
      ...answer,
      label: String.fromCharCode(97 + index), // a, b, c
    }));

    setShuffledAnswers(labeledAnswers);
  }, [question]);

  const handleAnswerClick = (answer) => {
    onAnswerSelect(answer.text);
  };

  if (shuffledAnswers.length === 0) {
    return <div>Cargando pregunta...</div>;
  }

  return (
    <>
      <div className="question-container">
        <img className="logo_small" src={logo} />
        <div className="question-counter">
          Pregunta {questionNumber} de {totalQuestions}
        </div>

        <div className="card">
          <h2 className="question-text">{question.question}</h2>

          <div className="answers-container">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                className="answer-btn"
                onClick={() => handleAnswerClick(answer)}
              >
                <span className="answer-label">
                  {answer.label.toUpperCase()}
                </span>
                <span>{answer.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
