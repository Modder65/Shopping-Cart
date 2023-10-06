import { useContext } from "react";
import { CartContext } from "../components/CartProvider";

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
