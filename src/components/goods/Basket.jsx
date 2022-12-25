import { useContext } from "react";
import { ShopContext } from "../../context/Context";
import BasketItem from "./BasketItem";

const Basket = () => {
  const { setIsBasketShow, orders } = useContext(ShopContext);
  function handleBasketShow() {
    setIsBasketShow(false);
  }
  function totalPrice() {
    return orders.reduce((sum, order) => {
      return sum + order.price * order.quantity;
    }, 0);
  }
  return (
    <div className="basket">
      <ul className="collection basket__list">
        <i onClick={handleBasketShow} className="material-icons basket__close">
          close
        </i>
        <li className="collection-item active">basket</li>
        {orders.length ? (
          orders.map((order) => <BasketItem key={order.id} {...order} />)
        ) : (
          <li className="collection-item">No items founded...</li>
        )}
        <li className="collection-item active">
          Total price: {totalPrice()} &euro;
        </li>
      </ul>
    </div>
  );
};

export default Basket;
