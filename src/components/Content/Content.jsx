import './Content.css';
import Navigation from '../Navigation/Navigation';
import Error from '../Error/Error';
import Pagination from '../Pagination/Pagination';

function Content () {
  return (
    <div className='content'>
      {/* <Navigation /> */}
      <h2 className="content__title">Все пиццы</h2>
      <Error />
      <Pagination />
    </div>
  )
}

export default Content;