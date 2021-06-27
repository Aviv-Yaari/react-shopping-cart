import React, { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { toggle } from "../../store/cartSlice";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" className="px-2 text-white">
      <Navbar.Brand>React Meals</Navbar.Brand>
      <div style={{ marginLeft: "auto" }}>
        {isAuthenticated && (
          <span className="px-2">Hello, {user.nickname}</span>
        )}
        {isAuthenticated && (
          <button
            className="btn btn-primary mx-3"
            onClick={() => dispatch(toggle())}
          >
            Cart <span className="badge badge-light">{cart.items.length}</span>
          </button>
        )}
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
      </div>
    </Navbar>
  );
};

export default Header;
