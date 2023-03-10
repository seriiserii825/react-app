import {useContext} from "react";
import {ShopContext} from "../../context/Context";

const GoodsListItem = (props) => {
  const {updateCart} = useContext(ShopContext);
  const {
    mainId,
    displayName,
    displayAssets,
    displayDescription,
    price: { regularPrice },
  } = props;
  const url = displayAssets[0].background;
  function handleClick() {
    updateCart({
      id: mainId,
      name: displayName,
      price: regularPrice,
      image: url,
      quantity: 1,
    });
  }
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt={displayName} />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button onClick={() => handleClick()} className="btn">
          Buy
        </button>
        <strong className="right">{regularPrice} &euro;</strong>
      </div>
    </div>
  );
};

export default GoodsListItem;
