import React from 'react';
import style from './Search.module.scss';
import SearchIcon from '../../images/search.svg';

function Search() {
  const [searchValue, setSearchValue] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();

    setSearchValue(e.target.value);
  }

  return (
    <form className={style.root}>
      <input
        type="text"
        placeholder="Поиск пиццы..."
        value={searchValue}
        onChange={(e) => onSubmit(e)}
      />
      <button type="submit">
        <img src={SearchIcon} alt="search icon." />
      </button>
    </form>
  );
}

export default Search;
