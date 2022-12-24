import BasketItem from "./BasketItem";

const Basket = ({ orders, toggleBasket, removeBasketItem }) => {
  function handleBasketShow() {
    toggleBasket();
  }
  function totalPrice(){
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
          orders.map((order) => <BasketItem key={order.id} {...order} removeBasketItem={removeBasketItem} />)
        ) : (
          <li className="collection-item">No items founded...</li>
        )}
        <li className="collection-item active">Total price: {totalPrice()} &euro;</li>
      </ul>
    </div>
  );
};

export default Basket;
