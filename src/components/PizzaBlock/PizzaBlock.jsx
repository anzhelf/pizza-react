import './PizzaBlock.css';
import Pizza from '../../images/pizza.svg';


function PizzaBlock() {
  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={Pizza} />
      <h3 className='pizza-block__title'>Чизбургер-пицца</h3>
      <div class="pizza-block__info">

      </div>
      <div class="pizza-block__button-block">
        
        </div>
    </div>
  )
}

export default PizzaBlock;