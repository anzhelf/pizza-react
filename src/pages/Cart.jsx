import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import CartBlack from '../images/cart-black.svg';
import Trash from '../images/delete.svg';
import Patch from '../images/path.svg';
import '../components/Animation/Animation.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearItems } from '../redux/slices/cartSlice';
import CartItem from '../components/CartItem/CartItem';
import CartEmpty from '../components/CartEmpty/CartEmpty';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  // const addedCount = cartItem ? cartItem.count : 0;

  const onClickClear = () => {
    if (window.confirm('Ты действительно хочешь очистить корзину?'))
      dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <main className={styles.cart}>
      <div className={styles.cart__header}>
        <div className={styles.cart__box}>
          <img src={CartBlack} alt="Black shopping cart icon." />
          <h1>Корзина</h1>
        </div>

        <button onClick={onClickClear} className="animation__button">
          <img src={Trash} alt="Trash can icon" />
          <p>Очистить корзину</p>
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <div className={styles.cart__total}>
        <p>Всего пицц: {totalCount} шт.</p>
        <p>
          Сумма заказа: <span>{totalPrice} ₽</span>
        </p>
      </div>

      <div className={styles.cart__button}>
        <Link to="/" className={styles.cart__back}>
          <img src={Patch} alt="Patch icon." />
          <p>Вернуться назад</p>
        </Link>
        <button className="animation__button">Оплатить сейчас</button>
      </div>
    </main>
  );
};

export default Cart;
