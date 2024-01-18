import React from 'react';
import style from './Search.module.scss';
import debounce from 'lodash.debounce';
import SearchIcon from '../../images/search.svg';
import ClearIcon from '../../images/close.svg';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // function onSubmit(e) {
  //   e.preventDefault();
  //   setSearchValue(e.target.value);
  // }

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <form className={style.root}>
      <button className={style.button__search} type="submit">
        <img src={SearchIcon} alt="search icon." />
      </button>

      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск пиццы..."
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <button onClick={onClickClear} className={style.button__clear}>
          <img src={ClearIcon} alt="clear icon." />
        </button>
      )}
    </form>
  );
};

export default Search;
