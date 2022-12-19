function BasketItem(props) {
  const {
    id, 
    title, 
    price, 
    background, 
    quantity, 
    removeFromBasket = Function.prototype, 
    increment= Function.prototype,
    decrement = Function.prototype 
  } = props;

  return (
    <li className="collection-item avatar basket-item">
      <img src={background} alt={title} className="circle" />
      <div className="basket-info">
        <div className="title basket-title">{title}</div>
        <span>{quantity} X {price} руб.</span>
      </div>
      <span className="basket-total-item">{price * quantity} руб.</span>
      <div className="basket-buttons">
        <button className="basket-btn" onClick={() => increment(id)}>+</button>
        <button className="basket-btn" onClick={() => decrement(id)}>-</button>
      </div>
      <span className="basket-clear" onClick={() => removeFromBasket(id)}><i className="material-icons">clear</i></span>
    </li>
  )
};

export {BasketItem};