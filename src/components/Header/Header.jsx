import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Cart from '../../images/cart.svg';
import Search from '../Search/Search';
import './Header.scss';
import { SearchContext } from '../../App';

function Header() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__container-logo">
          <img className="header__logo" src={Logo} alt="Pizza logo." />
          <div className="header__text-container">
            <h1 className="header__title">REACT PIZZA</h1>
            <p className="header__subtitle">самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>

      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <Link to="/cart" className="button header__button">
        <span className="header__button-text header__text-price">520 ₽</span>
        <div className="button__delimiter"></div>
        <img
          className="button__image"
          src={Cart}
          alt="White shopping cart icon."
        />
        <span className="header__button-text header__text-pozitions">0</span>
      </Link>
    </header>
  );
}

export default Header;
