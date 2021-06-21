import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import CartData from "../cart-data";

const Header = () => {
  const cart = useContext(CartData);

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between px-5">
      <Navbar.Brand>React Meals</Navbar.Brand>
      <button className="btn btn-primary" onClick={() => cart.toggleVisi()}>
        Cart <span className="badge badge-light">{cart.items.length}</span>
      </button>
    </Navbar>
  );
};

export default Header;
