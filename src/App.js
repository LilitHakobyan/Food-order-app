import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvader from "./store/CartProvader";

function App() {
  const [cartIsShown, setCartIsshown] = useState(false);

  const showCartHandler = () => {
    setCartIsshown(true);
  }

  const hideCartHandler = () => {
    setCartIsshown(false);
  }

  return (
    <CartProvader>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvader>
  );
}

export default App;
