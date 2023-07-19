import './Error.css';

function Error () {
  return (
    <div className='error'>
      <h2 className="error__title">Произошла ошибка 😕</h2>
      <p className='error__text'>
        К сожалению, не удалось получить питсы.
        Попробуйте повторить попытку позже.
      </p>
    </div>
  )
}

export default Error;