import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
import {
	CLOSE_ALERT,
	REMOVE_FROM_BASKET,
	SET_GOODS,
	SET_IS_BASKET_SHOW,
	SET_LOADING,
	UPDATE_CART,
} from './../reducer_vars/shop_vars';

export const ShopContext = createContext();
const initialState = {
	goods: [],
	loading: false,
	orders: [],
	isBasketShow: false,
	error: null,
	toast: '',
};
export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);
	value.closeAlert = () => {
		dispatch({ type: CLOSE_ALERT });
	};
	value.removeBasketItem = (id) => {
		dispatch({ type: REMOVE_FROM_BASKET, payload: id });
	};
	value.updateCart = (item) => {
		dispatch({ type: UPDATE_CART, payload: item });
	};
	value.setGoods = (items) => {
		dispatch({ type: SET_GOODS, payload: items });
	};
	value.setLoading = (data) => {
		dispatch({ type: SET_LOADING, payload: data });
	};
	value.setIsBasketShow = (data) => {
		dispatch({ type: SET_IS_BASKET_SHOW, payload: data });
	};
	return (
		<ShopContext.Provider value={value}>{children}</ShopContext.Provider>
	);
};
