import React from 'react';
import styles from './CartItem.module.scss';
import Plus from '../../images/plus.svg';
import Clear from '../../images/clear.svg';
import Minus from '../../images/minus.svg';
import '../../components/Animation/Animation.css';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';

const CartItem = ({ id, title, price, count, imageUrl, type, size }) => {
  const dispatch = useDispatch();
  // const addedCount = cartItem ? cartItem.count : 0;

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить свой товар?'))
      dispatch(removeItem(id));
  };

  return (
    <li className={styles['cart-item']}>
      <div className={styles['cart-item__title']}>
        <img src={imageUrl} />
        <div>
          <h2>{title}</h2>
          <p>{`${type}, ${size} см.`}</p>
        </div>
      </div>

      <div className={styles['cart-item__add']}>
        <img onClick={onClickMinus} className="animation__button" src={Minus} />
        <span>{count}</span>
        <img onClick={onClickPlus} className="animation__button" src={Plus} />
      </div>

      <span>{price * count} ₽ </span>
      <img onClick={onClickRemove} className="animation__button" src={Clear} />
    </li>
  );
};

export default CartItem;
