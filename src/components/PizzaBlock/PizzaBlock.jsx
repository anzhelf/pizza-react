import React from 'react';
import { Link } from 'react-router-dom';
import './PizzaBlock.scss';

function PizzaBlock({ imageUrl, title, price, id, sizes, types }) {
  const [type, setType] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block">
      <Link className="pizza-block__link" key={id} to="#">
        <img className="pizza-block__image" src={imageUrl} />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>

      <div className="pizza-block__options">
        <ul className="pizza-block__list">
          {types.map((el, i) => (
            <li
              key={i}
              onClick={() => setSize(el)}
              className={`pizza-block__type ${size === el && 'active'}`}>
              <p className="pizza-block__type-text">{typeNames[el]}</p>
            </li>
          ))}
        </ul>

        <ul className="pizza-block__list">
          {sizes.map((el, i) => (
            <li
              key={i}
              onClick={() => setType(i)}
              className={`pizza-block__type ${type === i && 'active'}`}>
              <p className="pizza-block__type-text">{el} см.</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="pizza-block__button-block">
        <span className="pizza-block__price">от {price} ₽</span>

        <button className="pizza-block__button">
          <span className="pizza-block__add">+</span>
          <span className="pizza-block__text">Добавить</span>
          <div className="pizza-block__box">
            <span className="pizza-block__item">0</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
