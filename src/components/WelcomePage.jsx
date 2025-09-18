import logo from "../assets/images/logo_supercars.svg";

const WelcomePage = ({ onStartGame }) => {
  return (
    <div className="card">
      <img className="logo" src={logo} />

      <h1 className="title">Supercars Trivia</h1>

      <p className="subtitle">
        Aprende sobre los automóviles eléctricos y cómo podrían darte la
        libertad y el ahorro que necesitas.
      </p>

      <p className="subtitle">
        Participa y llévate un lindo{" "}
        <span style={{ color: "#28b4fa" }}>recuerdo de SUPERCARS</span>
      </p>

      <p className="subtitle_bold">¡No olvides de agendar tu TEST DRIVE!</p>

      <button className="btn" onClick={onStartGame}>
        Comenzar a jugar
      </button>
    </div>
  );
};

export default WelcomePage;
