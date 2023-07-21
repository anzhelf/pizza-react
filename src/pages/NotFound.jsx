import React from "react";
import './NotFound.css';
import Navigation from '../components/Navigation/Navigation';
import Error from '../components/Error/Error';

function NotFound() {

  return (
    <>
      <Navigation />
      <h2 className="title">Все пиццы</h2>
      <Error />
      <div className='pizza-list'>

      </div>
      </>
  );
}

export default NotFound;