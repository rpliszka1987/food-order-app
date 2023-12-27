import { useReducer } from "react";

import CartContext from "./cart-context";

// Default state for Cart
const defaultCartState = {
  items: [],
  totaAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updeatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totaAmount + action.item.price * action.item.amount;
    return {
      items: updeatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
