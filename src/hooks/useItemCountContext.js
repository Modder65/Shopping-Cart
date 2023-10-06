import { useContext } from "react";
import { ItemCountContext } from "../components/CartProvider";

export const useItemCountContext = () => {
  const context = useContext(ItemCountContext);
  return context;
};
