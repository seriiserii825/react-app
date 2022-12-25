import GoodsListItem from "./GoodsListItem";

const GoodsList = (props) => {
  const { goods } = props;
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsListItem key={item.mainId} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
