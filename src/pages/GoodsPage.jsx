import { useContext, useEffect, useState } from 'react';
import Basket from '../components/goods/Basket';
import Cart from '../components/goods/Cart';
import GoodsList from '../components/goods/GoodsList';
import Preloader from '../components/UI/Preloader';
import Toast from '../components/UI/Toast';
import { APP_KEY, APP_URL } from '../config';
import { ShopContext } from '../context/Context';

const GoodsPage = () => {
	const {
		toast,
		goods,
		setGoods,
		loading,
		setLoading,
		setIsBasketShow,
		isBasketShow,
	} = useContext(ShopContext);
	const [error, setError] = useState(null);
	function toggleBasket() {
		setIsBasketShow(!isBasketShow);
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
			})
			.catch((error) => {
				setError('Access token is invalid');
				console.log(error, 'error');
				setLoading(false);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="mt4">
			<div className="container">
				<h2>Goods</h2>
				{loading ? (
					<Preloader />
				) : error ? (
					<h3 className="center red-text">{error}</h3>
				) : (
					<GoodsList goods={goods} />
				)}
				<Cart toggleBasket={toggleBasket} />
			</div>
			{isBasketShow && <Basket />}
			{toast !== '' && <Toast message={toast} />}
		</div>
	);
};
export default GoodsPage;
