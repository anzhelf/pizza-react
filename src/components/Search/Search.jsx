import React from 'react';
import style from './Search.module.scss';
import debounce from 'lodash.debounce';
import SearchIcon from '../../images/search.svg';
import ClearIcon from '../../images/close.svg';
import { SearchContext } from '../../App';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  function onSubmit(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
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
