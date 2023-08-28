import React from 'react';
import './Home.scss';
import Category from '../components/Category/Category';
import Sort from '../components/Sort/Sort';
// import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
// import { URL } from '../constants/constants';

function Home() {
  const [items, setItems] = React.useState([]);
  //для отображения скелетона во время загрузки
  const [isLoading, setIsLoadig] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности (DESC)',
    sortProperty: 'rating',
  });

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setIsLoadig(true);
    fetch(
      `https://64bae2425e0670a501d6b934.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        console.log(json);
      })
      .catch((e) => console.error('error:', e))
      .finally(() => {
        setIsLoadig(false);
      });
    //чтоб при переходе по ссылке делался скролл вверх
    window.scroll(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <nav className="menu">
        <Category
          categoryId={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />

        <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)} />
      </nav>

      <h2 className="title">Все пиццы</h2>
      <div className="pizza-list">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj, i) => <PizzaBlock {...obj} key={i} />)}
      </div>

      {/* <Error /> */}
      {/* <Pagination /> */}
    </>
  );
}

export default Home;
