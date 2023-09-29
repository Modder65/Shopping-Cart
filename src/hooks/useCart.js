import { useEffect } from "react";
import { useCartContext } from "../global state/CartContext";

export function useCart() {
  const { cart, setCart } = useCartContext();

  const handleCart = (product) => {
    //Add date stamp to Id property in product objects so you can add multiple of the same item to the cart
    //and each of them will now have a unique ID based on the date stamp instead of the same ID which gives an error
    const cartItem = { ...product, cartId: `${product.id}-${Date.now()}` };
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return { cart, setCart, handleCart, removeFromCart };
}
