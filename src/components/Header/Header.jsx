import Logo from '../../images/logo.svg';
import Cart from '../../images/cart.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__container-logo">
          <img className="header__logo" src={Logo} />
          <div className="header__text-container">
            <h1 className="header__title">REACT PIZZA</h1>
            <p className="header__subtitle">самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      {/* add input */}
      {/* <input class="header__search" placeholder="Поиск пиццы..." value=""/> */}
      {/* extract button-link into a separate component */}y
      <a className="button header__button">
        <span className="header__button-text header__text-price">520 ₽</span>
        <div className="button__delimiter"></div>
        <img className="button__image" src={Cart} />
        <span className="header__button-text header__text-pozitions">0</span>
      </a>
    </header>
  );
}

export default Header;
