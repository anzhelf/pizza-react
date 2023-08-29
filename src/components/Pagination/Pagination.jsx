import style from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

console.log(style.root);

const Pagination = () => {
  return (
    // <ul className="pagination">
    //   <li className="pagination__element">
    //     <a href="#" className="pagination__button">
    //       {String.fromCharCode(60)}
    //     </a>
    //   </li>

    //   <li className="pagination__element active">
    //     <a href="#" className="pagination__button">
    //       1
    //     </a>
    //   </li>

    //   <li className="pagination__element">
    //     <a href="#" className="pagination__button">
    //       2
    //     </a>
    //   </li>

    //   <li className="pagination__element">
    //     <a href="#" className="pagination__button">
    //       3
    //     </a>
    //   </li>

    //   <li className="pagination__element">
    //     <a href="#" className="pagination__button">
    //       {String.fromCharCode(62)}
    //     </a>
    //   </li>
    // </ul>
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={8}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
