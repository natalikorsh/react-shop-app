function Cart(props) {
  const { quantity = 0, handleShowBasket = Function.prototype } = props;

  return (
  <span className="cart" onClick={handleShowBasket}>
    <i className="material-icons">shopping_cart</i>
    { quantity ? <span className="cart-quantity">{quantity}</span> : null }
  </span>
  );
}

export {Cart}