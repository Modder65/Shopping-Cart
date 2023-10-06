import { useState, createContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();
export const ItemCountContext = createContext();

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

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <ItemCountContext.Provider value={{ itemCount, setItemCount }}>
        {children}
      </ItemCountContext.Provider>
    </CartContext.Provider>
  );
};

//Prop Validation

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
