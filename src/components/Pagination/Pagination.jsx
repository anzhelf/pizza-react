import './Pagination.scss';

function Pagination() {
  return (
    <ul className="pagination">
      <li className="pagination__element">
        <a href="#" className="pagination__button">
          {String.fromCharCode(60)}
        </a>
      </li>

      <li className="pagination__element active">
        <a href="#" className="pagination__button">
          1
        </a>
      </li>

      <li className="pagination__element">
        <a href="#" className="pagination__button">
          2
        </a>
      </li>

      <li className="pagination__element">
        <a href="#" className="pagination__button">
          3
        </a>
      </li>

      <li className="pagination__element">
        <a href="#" className="pagination__button">
          {String.fromCharCode(62)}
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
