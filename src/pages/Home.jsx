import React from 'react';
import './Home.scss';
import Category from '../components/Category/Category';
import Sort from '../components/Sort/Sort';
// import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import { sortList } from '../constants/constants';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter,
  );
  const sortType = sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const [items, setItems] = React.useState([]);
  //для отображения скелетона во время загрузки
  const [isLoading, setIsLoadig] = React.useState(true);

  const skelet = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzas = items.map((obj, i) => <PizzaBlock {...obj} key={i} />);
  const order = sortType.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

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
    window.scroll(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
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

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas = () => {
    setIsLoadig(true);
    axios
      .get(
        `https://64bae2425e0670a501d6b934.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoadig(false);
      });
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
      <Pagination currentPage={currentPage} onCangePage={onChangePage} />
    </>
  );
}

export default Home;
