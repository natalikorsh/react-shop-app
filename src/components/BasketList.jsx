import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [], 
    handleShowBasket = Function.prototype, 
    removeFromBasket = Function.prototype,
    increment = Function.prototype,
    decrement = Function.prototype 
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return ( <div className="basket-list">
    <ul className="collection">
      <li className="collection-item basket-header">
        Корзина
      </li>
      {
        order.map(orderItem => (
          <BasketItem 
            key={orderItem.id} 
            {...orderItem} 
            removeFromBasket={removeFromBasket}
            increment={increment}
            decrement={decrement}/>
          ))
      }
      <li className="collection-item basket-footer">
        Общая стоимость: {totalPrice} руб.
        <a href="!#" className="right form-order">Оформить</a>
      </li>

      <span className="basket-close" onClick={handleShowBasket}><i className="material-icons">close</i></span>
    </ul>
    </div>
  )
}

export {BasketList}