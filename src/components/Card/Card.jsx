import logo from '../../image/log.svg';
import './Card.scss';

function Card() {
  return (
    <header className="header">
      <image className="header__logo" src={logo} />

      <div className="header__text-container">
        <h1 className="header__title">REACT PIZZA</h1>
        <p className="header__subtitle">самая вкусная пицца во вселенной</p>
      </div>

      <button className="header__button"></button>
    </header>
  );
}

export default Card;
