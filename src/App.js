import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Components/Header";
import ItemsList from "./Components/ItemsList";
import Cart from "./Components/Cart";
import items from "./items.json";
import { CartDataProvider } from "./cart-data";

function App() {
  return (
    <CartDataProvider>
      <Header />
      <Cart />
      <ItemsList items={items} />
    </CartDataProvider>
  );
}

export default App;
