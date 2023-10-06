import { useState, createContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const prevCartLength = useRef(cart.length);

  useEffect(() => {
    if (cart.length > prevCartLength.current) {
      setItemCount((prev) => prev + 1);
    } else if (cart.length < prevCartLength.current) {
      setItemCount((prev) => prev - 1);
    }

    prevCartLength.current = cart.length;
  }, [cart]);

  const value = {
    cart,
    setCart,
    itemCount,
    setItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//Prop Validation

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
