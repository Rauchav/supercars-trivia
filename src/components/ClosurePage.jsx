import logo from "../assets/images/logo_supercars.svg";

const ClosurePage = ({ userAnswers, onRestart }) => {
  const correctAnswers = userAnswers.filter(
    (answer) => answer.isCorrect
  ).length;
  const incorrectAnswers = userAnswers.filter(
    (answer) => !answer.isCorrect
  ).length;

  return (
    <div className="closure-container">
      <div className="card">
        <img className="logo" src={logo} />

        <h1 className="title">
          Felicidades, has completado la trivia de supercars
        </h1>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-icon correct">✓</span>
            <span>{correctAnswers} Correctas</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon incorrect">✗</span>
            <span>{incorrectAnswers} Incorrectas</span>
          </div>
        </div>

        <p className="subtitle">
          Ahora ya sabes mucho más sobre los automóviles eléctricos
        </p>

        <div className="promotional-bubble">
          Te ganaste un recuerdo de SPERCARS
        </div>

        <p className="subtitle">No olvides de agendar tu TEST DRIVE</p>

        <h2 className="final-message">GRACIAS POR PARTICIPAR</h2>

        <button className="btn" onClick={onRestart}>
          VOLVER A JUGAR
        </button>
      </div>
    </div>
  );
};

export default ClosurePage;
