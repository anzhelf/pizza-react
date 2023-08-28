import React from 'react';
import './Sort.scss';
import Icon from '../../images/sort.svg';
import '../Animation/Animation.css';

function Sort({ sortType, onChangeSort }) {
  const [open, setOpen] = React.useState(false);
  const arrSort = [
    { name: 'популярности (DESC)', sortProperty: 'rating' },
    { name: 'популярности (ASC)', sortProperty: '-rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: '-price' },
    { name: 'алфавиту (DESC)', sortProperty: 'title' },
    { name: 'алфавиту (ASC)', sortProperty: '-title' },
  ];

  const onChange = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <img className={` ${open && 'opened'} sort__image`} src={Icon} />
        <p className="sort__text">Сортировка по:</p>
        <span
          onClick={() => setOpen(!open)}
          className="sort__text option sort__text-option animation__link">
          {sortType.name}
        </span>
      </div>

      {open && (
        <div className={` ${open && 'opened'} sort__popup`}>
          <ul className="sort__list">
            {arrSort.map((obj, i) => (
              <li
                onClick={() => onChange(obj)}
                key={i}
                className={`sort__link animation__link ${
                  sortType.sortProperty === obj.sortProperty
                    ? 'sort__link_active'
                    : ''
                }`}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
