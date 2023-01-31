import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js";
import MealsList from "./components/meals/Meals_list.js";
import React, { useState } from "react";
import CartContextProvider from "./store/Cart-context-provider.js";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartWindowHandler = () => {
    setCartIsVisible(true);
  };

  const closeCartWindowHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      <Header onCartOpen={showCartWindowHandler} />
      <MealsList />
      {cartIsVisible && <Cart onCartClose={closeCartWindowHandler} />}
    </CartContextProvider>
  );
}

export default App;
