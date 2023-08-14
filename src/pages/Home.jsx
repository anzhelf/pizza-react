import React from 'react';
import './Home.scss';
import Navigation from '../components/Navigation/Navigation';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination/Pagination';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';

function Home({ cards }) {
  return (
    <>
      <Navigation />
      <h2 className="title">Все пиццы</h2>
      <div className="pizza-list">
        {cards.map((obj) => (
          <PizzaBlock {...obj} key={obj.id} />
        ))}
      </div>

      {/* <Error /> */}
      <Pagination />
    </>
  );
}

export default Home;
