import React from 'react';
import './Sort.scss';
import Icon from '../../images/sort.svg';
import '../Animation/Animation.css';
import { arrSort } from '../../constants/constants';

import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = React.useState(false);

  const onChange = (obj) => {
    dispatch(setSort(obj));
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
          {sort.name}
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
                  sort.sortProperty === obj.sortProperty
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
