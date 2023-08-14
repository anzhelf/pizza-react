import './PizzaBlock.scss';
import Pizza from '../../images/pizza.svg';

function PizzaBlock({ image, title, info }) {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={Pizza} />
      <h3 className="pizza-block__title">Чизбургер-пицца</h3>
      <div className="pizza-block__info"></div>

      <div className="pizza-block__button-block">
        <span className="pizza-block__price">от 395 ₽</span>

        <button className="pizza-block__button">
          <p className="pizza-block__add">+</p>
          <p className="pizza-block__text">Добавить</p>
          <div className="pizza-block__box">
            <p className="pizza-block__item">2</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
