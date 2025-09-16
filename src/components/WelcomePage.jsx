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
        Ganate en descuento especial del 10%, para comprar de tu nuevo vehículo
        eléctrico
      </p>

      <button className="btn" onClick={onStartGame}>
        Comenzar a jugar
      </button>
    </div>
  );
};

export default WelcomePage;
