import React from 'react';
import { Link } from 'react-router-dom';
import './PizzaBlock.scss';

function PizzaBlock({ image, title, price, info, id }) {
  const [type, setType] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [pizzaCount, setPizzaCount] = React.useState(0);

  return (
    <div className="pizza-block">
      <Link className="pizza-block__link" key={id} to="#">
        <img className="pizza-block__image" src={image} />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>

      <div className="pizza-block__options">
        <ul className="pizza-block__list">
          <li onClick={() => setSize(0)} className={`pizza-block__type ${size === 0 && 'active'}`}>
            <p className="pizza-block__type-text">тонкое</p>
          </li>
          <li onClick={() => setSize(1)} className={`pizza-block__type ${size === 1 && 'active'}`}>
            <p className="pizza-block__type-text">традиционное</p>
          </li>
        </ul>

        <ul className="pizza-block__list">
          <li onClick={() => setType(0)} className={`pizza-block__type ${type === 0 && 'active'}`}>
            <p className="pizza-block__type-text">{`${26} см.`}</p>
          </li>
          <li onClick={() => setType(1)} className={`pizza-block__type ${type === 1 && 'active'}`}>
            <p className="pizza-block__type-text">{`${30} см.`}</p>
          </li>
          <li onClick={() => setType(2)} className={`pizza-block__type ${type === 2 && 'active'}`}>
            <p className="pizza-block__type-text">{`${40} см.`}</p>
          </li>
        </ul>
      </div>

      <div className="pizza-block__button-block">
        <span className="pizza-block__price">от {price} ₽</span>

        <button onClick={() => setPizzaCount(pizzaCount + 1)} className="pizza-block__button">
          <span className="pizza-block__add">+</span>
          <span className="pizza-block__text">Добавить</span>
          <div className="pizza-block__box">
            <span className="pizza-block__item">{pizzaCount}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
