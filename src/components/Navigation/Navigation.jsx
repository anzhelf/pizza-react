import React from 'react';
import './Navigation.scss';
// import Option from '../Option/Option';
import '../Animation/Animation.css';
import Sort from '../Sort/Sort';

const arrCategories = ['Все', 'Мясные', 'Вегетарианская', 'Острые', 'Закрытые'];

function Navigation() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {arrCategories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`navigation__link animation__link ${activeIndex === i ? 'active' : ''}`}>
            {value}
          </li>
        ))}
      </ul>

      <Sort />
    </nav>
  );
}

export default Navigation;
