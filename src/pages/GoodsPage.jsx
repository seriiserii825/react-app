import { useEffect, useState } from "react";
import Cart from "../components/goods/Cart";
import GoodsList from "../components/goods/GoodsList";
import Preloader from "../components/UI/Preloader";
import { APP_KEY, APP_URL } from "../config";

const GoodsPage = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  function updateCart(item) {
    const itemIndex = orders.findIndex((order) => order.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrders([...orders, newItem]);
    } else {
      const newOrders = [...orders];
      newOrders[itemIndex].quantity++;
      setOrders(newOrders);
    }
  }
  useEffect(function getGoods() {
    setLoading(true);
    fetch(APP_URL, {
      headers: {
        Authorization: APP_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <div className="mt4">
      <div className="container">
        <h2>Goods</h2>
        {loading ? <Preloader /> : <GoodsList updateCart={updateCart} goods={goods} />}
        <Cart quantity={orders.length} />
      </div>
    </div>
  );
};
export default GoodsPage;
