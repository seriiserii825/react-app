import { useContext } from "react";
import { ShopContext } from "../../context/Context";

const Cart = () => {
  const { orders, setIsBasketShow } = useContext(ShopContext);
  const quantity = orders.length;

  function handleBasketShow() {
    setIsBasketShow(true);
  }

  return (
    <div className="cart teal darken-4" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
