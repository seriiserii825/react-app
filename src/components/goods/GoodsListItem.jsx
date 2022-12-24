const GoodsListItem = (props) => {
  const {
    displayName,
    displayAssets,
    displayDescription,
    price: { regularPrice },
    updateCart,
  } = props;
  const url = displayAssets[0].background;
  function handleClick() {
    updateCart({
      id: props.mainId,
      name: displayName,
      price: regularPrice,
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
        <strong className="right">{regularPrice}</strong>
      </div>
    </div>
  );
};

export default GoodsListItem;
