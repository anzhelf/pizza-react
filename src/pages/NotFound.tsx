import React from 'react';
// import './NotFound.css';/
// import Navigation from '../components/Category/Category';
import Error from '../components/Error/Error';

const NotFound: React.FC = () => {
  return (
    <>
      {/* <Navigation /> */}
      <h2 className="title">Все пиццы</h2>
      <Error />
      <div className="pizza-list"></div>
    </>
  );
};

export default NotFound;
