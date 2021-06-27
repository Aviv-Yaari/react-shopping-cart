import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Components/Header/Header";
import ItemsList from "./Components/Items/ItemsList";
import Cart from "./Components/Cart";
import { CartDataProvider } from "./store/cart-data";

function App() {
  return (
    <CartDataProvider>
      <Header />
      <Cart />
      <ItemsList />
    </CartDataProvider>
  );
}

export default App;
