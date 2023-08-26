import React from 'react';
import styles from './Category.module.scss';
// import Option from '../Option/Option';
import '../Animation/Animation.css';

function Category({ categoryId, onChangeCategory }) {
  const arrCategories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Острые',
    'Закрытые',
  ];

  return (
    <ul className={styles.category}>
      {arrCategories.map((value, i) => (
        <li
          key={i}
          onClick={() => onChangeCategory(i)}
          className={`animation__link ${categoryId === i && styles.active}`}>
          {value}
        </li>
      ))}
    </ul>
  );
}

export default Category;
