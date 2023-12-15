import React from 'react';
import './Home.scss';
import Category from '../components/Category/Category';
import Sort from '../components/Sort/Sort';
// import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import { SearchContext } from '../App';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const [items, setItems] = React.useState([]);
  //для отображения скелетона во время загрузки
  const [isLoading, setIsLoadig] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);

  const skelet = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items.map((obj, i) => <PizzaBlock {...obj} key={i} />);

  const order = sortType.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  const search = searchValue ? `&search=${searchValue}` : '';

  React.useEffect(() => {
    setIsLoadig(true);
    fetch(
      `https://64bae2425e0670a501d6b934.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      })
      .catch((e) => console.error('error:', e))
      .finally(() => {
        setIsLoadig(false);
      });
    //чтоб при переходе по ссылке делался скролл вверх
    window.scroll(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <>
      <nav className="menu">
        <Category categoryId={categoryId} onChangeCategory={onChangeCategory} />

        <Sort />
      </nav>

      <h2 className="title">Все пиццы</h2>
      <div className="pizza-list">{isLoading ? skelet : pizzas}</div>

      {/* <Error /> */}
      <Pagination onCangePage={(number) => setCurrentPage(number)} />
    </>
  );
}

export default Home;
