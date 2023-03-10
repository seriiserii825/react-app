import { useContext } from "react";
import { ShopContext } from "../../context/Context";

const BasketItem = ({ id, name, image, quantity, price }) => {
  const { removeBasketItem } = useContext(ShopContext);
  function removeHandler() {
    removeBasketItem(id);
  }
  return (
    <li className="collection-item basket__item">
      <img className="mr2" src={image} alt={name} width={80} />
      <span className="mr2">{name}</span>
      <span>{quantity} x </span>
      <strong>{price} &euro;</strong>
      <i
        onClick={removeHandler}
        className="material-icons"
        style={{ marginLeft: "auto" }}
      >
        close
      </i>
    </li>
  );
};

export default BasketItem;
