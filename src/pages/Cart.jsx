import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import CartBlack from '../images/cart-black.svg';
import Trash from '../images/delete.svg';
import Patch from '../images/path.svg';
import Pizzza from '../images/pizza.svg';

import Plus from '../images/plus.svg';
import Clear from '../images/clear.svg';
import Minus from '../images/minus.svg';

const Cart = () => {
  return (
    <main className={styles.cart}>
      <div className={styles.cart__header}>
        <div className={styles.cart__box}>
          <img src={CartBlack} alt="Black shopping cart icon." />
          <h1>Корзина</h1>
        </div>

        <button>
          <img src={Trash} alt="Trash can icon" />
          <p>Очистить корзину</p>
        </button>
      </div>

      <ul>
        <li>
          <div className={styles.cart__title}>
            <img src={Pizzza} />
            <div>
              <h2>Сырный цыпленок</h2>
              <p>тонкое тесто, 26 см.</p>
            </div>
          </div>

          <div className={styles.cart__add}>
            <img src={Plus} />
            <span>2</span>
            <img src={Minus} />
          </div>

          <span>770 ₽ </span>

          <img src={Clear} />
        </li>
      </ul>

      <ul>
        <li>
          <div className={styles.cart__title}>
            <img src={Pizzza} />
            <div>
              <h2>Сырный цыпленок</h2>
              <p>тонкое тесто, 26 см.</p>
            </div>
          </div>

          <div className={styles.cart__add}>
            <img src={Plus} />
            <span>2</span>
            <img src={Minus} />
          </div>

          <span>770 ₽ </span>

          <img src={Clear} />
        </li>
      </ul>

      <ul>
        <li>
          <div className={styles.cart__title}>
            <img src={Pizzza} />
            <div>
              <h2>Сырный цыпленок</h2>
              <p>тонкое тесто, 26 см.</p>
            </div>
          </div>

          <div className={styles.cart__add}>
            <img src={Plus} />
            <span>2</span>
            <img src={Minus} />
          </div>

          <span>770 ₽ </span>

          <img src={Clear} />
        </li>
      </ul>

      <div className={styles.cart__total}>
        <p>Всего пицц: 3 шт.</p>
        <p>
          Сумма заказа: <span>900 ₽</span>
        </p>
      </div>

      <div className={styles.cart__button}>
        <Link to="/" className={styles.cart__back}>
          <img src={Patch} alt="Patch icon." />
          <p>Вернуться назад</p>
        </Link>
        <button>Оплатить сейчас</button>
      </div>
    </main>
  );
};

export default Cart;
