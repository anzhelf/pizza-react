import Logo from '../../images/logo.svg';
import Cart from '../../images/cart.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">

      <div className="header__logo">  
        <img className="header__logo-image" src={Logo} />  
        <div className="header__text-container">
          <h1 className="header__title">REACT PIZZA</h1>
          <p className="header__subtitle">самая вкусная пицца во вселенной</p>
        </div>  
      </div>  

      <a className="header__button">
        <span className='title title__price'>520 ₽</span>
        <div class="button__delimiter"></div>
        <img className='button__image' src={Cart} />
        <span className='title title__pozition'>0</span>
      </a>
  
    </header>
  );  
}

export default Header;