import React from 'react';
import styles from './CartEmpty.module.scss';
import cartEmptyImg from '../../images/cart-empty.svg';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
  return (
    <div className={styles['cart-empty']}>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImg}></img>
      <Link className={styles['cart-empty__button']} to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
