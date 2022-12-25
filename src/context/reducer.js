import {
  CLOSE_ALERT,
  REMOVE_FROM_BASKET,
  SET_GOODS,
  SET_IS_BASKET_SHOW,
  SET_LOADING,
  UPDATE_CART,
} from "../reducer_vars/shop_vars";

export function reducer(state, { type, payload }) {
  switch (type) {
    case CLOSE_ALERT:
      return {
        ...state,
        toast: "",
      };
    case SET_IS_BASKET_SHOW:
      return {
        ...state,
        isBasketShow: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case REMOVE_FROM_BASKET:
      console.log(payload, "payload");
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== payload),
      };
    case SET_GOODS:
      return {
        ...state,
        goods: payload,
        loading: false,
      };
    case UPDATE_CART: {
      const itemIndex = state.orders.findIndex(
        (order) => order.id === payload.id
      );
      let new_order = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        new_order = [...state.orders, newItem];
      } else {
        const newOrders = [...state.orders];
        newOrders[itemIndex].quantity++;
        new_order = newOrders;
      }
      return {
        ...state,
        orders: new_order,
        toast: `Product ${payload.name} added to cart`
      };
    }
    default:
      return state;
  }
}
