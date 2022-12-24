const Cart = ({ quantity, toggleBasket }) => {
  function handleBasketShow() {
    toggleBasket();
  }
  return (
    <div className="cart teal darken-4" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
