import React from "react";

const ResultsPage = ({ answer, onNext, isLastQuestion }) => {
  const { isCorrect, feedback } = answer;

  return (
    <div className="result-container">
      <div className="card">
        <div className={`result-icon ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? "✓" : "✗"}
        </div>

        <h2 className={`result-title ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? "¡Correcto!" : "Incorrecto"}
        </h2>

        <p className="feedback-text">{feedback}</p>

        <button className="btn" onClick={onNext}>
          {isLastQuestion ? "Ver Resultados Finales" : "Siguiente Pregunta"}
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
