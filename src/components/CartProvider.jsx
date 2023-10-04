import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const value = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//Prop Validation

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
