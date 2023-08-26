import styles from './Error.module.scss';

function Error() {
  return (
    <div className={styles.root}>
      <h2>Произошла ошибка 😕</h2>
      <p>
        К сожалению, не удалось получить питсы. Попробуйте&nbsp;повторить
        попытку позже.
      </p>
    </div>
  );
}

export default Error;
