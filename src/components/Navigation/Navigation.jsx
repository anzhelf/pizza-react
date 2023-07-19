import './Navigation.css';
// import Option from '../Option/Option';
import Icon from '../../images/sort.svg';
import '../Animation/Animation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__link animation__link active">Все</li>
        <li className="navigation__link animation__link">Мясные</li>
        <li className="navigation__link animation__link">Вегетарианская</li>
        <li className="navigation__link animation__link">Острые</li>
        <li className="navigation__link animation__link">Закрытые</li>
      </ul>

      <div className="sort">

        <div className='sort__label'>
          <img className="sort__image" src={Icon} />
          <p className="sort__text">Сортировка по:</p>
          <span className="sort__text option sort__text-option animation__link">популярности</span>
        </div>

        <div className="sort__popup">
          <ul className="sort__list">
            <li className="sort__link animation__link sort__link_active">популярности (DESC)</li>
            <li className="sort__link animation__link">популярности (ASC)</li>
            <li className="sort__link animation__link">цене (DESC)</li>
            <li className="sort__link animation__link">цене (ASC)</li>
            <li className="sort__link animation__link">алфавиту (DESC)</li>
            <li className="sort__link animation__link">алфавиту (ASC)</li>
          </ul>
        </div>

      </div>

    </nav>
  );
}

export default Navigation;
