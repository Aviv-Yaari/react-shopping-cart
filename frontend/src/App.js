import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Components/Header/Header";
import ItemsList from "./Components/Items/ItemsList";
import Cart from "./Components/Cart";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Cart />
      <ItemsList />
    </Provider>
  );
}

export default App;
