import './Content.css';
import Navigation from '../Navigation/Navigation';
import Error from '../Error/Error';
import Pagination from '../Pagination/Pagination';
import PizzaBlock from '../PizzaBlock/PizzaBlock';

function Content () {
  return (
    <div className='content'>
      {/* <Navigation /> */}
      <h2 className="content__title">Все пиццы</h2>
      {/* <Error /> */}
      <div className='pizza-list'>
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
      </div>


      <Pagination />
    </div>
  )
}

export default Content;