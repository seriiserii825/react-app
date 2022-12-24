import GoodsListItem from "./GoodsListItem";

const GoodsList = (props) => {
  const { goods, updateCart } = props;
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsListItem key={item.mainId} {...item} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default GoodsList;
