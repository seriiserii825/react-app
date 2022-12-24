const Cart = ({ quantity }) => {
  return (
    <div className="cart">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
