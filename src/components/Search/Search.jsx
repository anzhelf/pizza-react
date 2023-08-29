import React from 'react';
import style from './Search.module.scss';
import SearchIcon from '../../images/search.svg';
import ClearIcon from '../../images/close.svg';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  function onSubmit(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  return (
    <form className={style.root}>
      <button className={style.button__search} type="submit">
        <img src={SearchIcon} alt="search icon." />
      </button>

      <input
        type="text"
        placeholder="Поиск пиццы..."
        value={searchValue}
        onChange={(e) => onSubmit(e)}
      />
      {searchValue && (
        <button
          onClick={() => setSearchValue('')}
          className={style.button__clear}
          type="submit">
          <img src={ClearIcon} alt="cline icon." />
        </button>
      )}
    </form>
  );
};

export default Search;
