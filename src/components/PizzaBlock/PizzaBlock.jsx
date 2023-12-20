import React from 'react';
import { Link } from 'react-router-dom';
import './PizzaBlock.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

function PizzaBlock({ imageUrl, title, price, id, sizes, types }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id),
  );
  const addedCount = cartItem ? cartItem.count : 0;

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

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
              onClick={() => setActiveType(i)}
              className={`pizza-block__type ${activeType === i && 'active'}`}>
              <p className="pizza-block__type-text">{typeNames[i]}</p>
            </li>
          ))}
        </ul>

        <ul className="pizza-block__list">
          {sizes.map((el, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={`pizza-block__type ${activeSize === i && 'active'}`}>
              <p className="pizza-block__type-text">{el} см.</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="pizza-block__button-block">
        <span className="pizza-block__price">от {price} ₽</span>

        <button onClick={onClickAdd} className="pizza-block__button">
          <span className="pizza-block__add">+</span>
          <span className="pizza-block__text">Добавить</span>

          {addedCount > 0 && (
            <div className="pizza-block__box">
              <span className="pizza-block__item">{addedCount}</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
