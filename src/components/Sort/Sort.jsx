import React from 'react';
import './Sort.scss';
import Icon from '../../images/sort.svg';
import '../Animation/Animation.css';
import { sortList } from '../../constants/constants';

import { useSelector, useDispatch } from 'react-redux';
import { setSort, selectFilter } from '../../redux/slices/filterSlice';

function Sort() {
  const dispatch = useDispatch();
  const { sort } = useSelector(selectFilter);
  const sortRef = React.useRef();

  const [open, setOpen] = React.useState(false);

  const onChange = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
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
            {sortList.map((obj, i) => (
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
