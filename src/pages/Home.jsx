import React from 'react';
import './Home.scss';
import Navigation from '../components/Navigation/Navigation';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/Skeleton/Skeleton';

function Home({ cards, isLoading }) {
  return (
    <>
      <Navigation />
      <h2 className="title">Все пиццы</h2>
      <div className="pizza-list">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : cards.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>

      {/* <Error /> */}
      <Pagination />
    </>
  );
}

export default Home;
