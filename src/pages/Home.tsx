import React from 'react';
import './Home.scss';
import Category from '../components/Category/Category';
import Sort from '../components/Sort/Sort';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
  selectFilter,
} from '../redux/slices/filterSlice';
import { sortList } from '../constants/constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status } = useSelector((state: any) => state.pizza);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const sortType = sort.sortProperty;

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const skelet = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items.map((obj: any, i: any) => (
    <Link key={i} to={`/pizza/${obj.id}`}>
      <PizzaBlock {...obj} />
    </Link>
  ));

  //если изменили параметры и был первый рендер параметры в url
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue, currentPage]);
  //нужно ли делать запрос на изменение пицц
  React.useEffect(() => {
    // window.scroll(0, 0);
    // if (!isSearch.current) {
    getPizzas();
    // }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  //если был первй рендерб то проверяем url-параметры и сохраняем в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty,
      );
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';
    dispatch(
      // @ts-ignore
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      }),
    );
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="menu">
        <Category categoryId={categoryId} onChangeCategory={onChangeCategory} />

        <Sort />
      </nav>

      <h2 className="title">Все пиццы</h2>
      {status === 'error' ? (
        <Error />
      ) : (
        <div className="pizza-list">
          {status === 'loading' ? skelet : pizzas}
        </div>
      )}

      <Pagination currentPage={currentPage} onCangePage={onChangePage} />
    </>
  );
};

export default Home;
