import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  // State to manage cart component displaying
  const [cartIsShown, setCartIsShown] = useState(false);

  // Show cart handler
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // Hide cart handler
  const hideCartIsShown = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* Shows Cart if the state is true */}
      {cartIsShown && <Cart onHideCart={hideCartIsShown} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
