import React from 'react';
import './Sort.scss';
import Icon from '../../images/sort.svg';
import '../Animation/Animation.css';

function Sort() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const arrSort = ['популярности', 'цене', 'алфавиту'];
  const sortName = arrSort[selected];

  const onClickListIttem = (i) => {
    setSelected(i);
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
          {sortName}
        </span>
      </div>

      {open && (
        <div className={` ${open && 'opened'} sort__popup`}>
          <ul className="sort__list">
            {arrSort.map((value, i) => (
              <li
                onClick={() => onClickListIttem(i)}
                key={i}
                className={`sort__link animation__link ${
                  selected === i ? 'sort__link_active' : ''
                }`}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
