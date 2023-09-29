import { useCart } from "../hooks/useCart";

export function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <h1 className="cart-header">My Cart</h1>
      <div className="products-container">
        {cart.map((cartItem) => (
          <div className="product" key={cartItem.cartId}>
            <div className="product-image-container">
              <img className="product-image" src={cartItem.image} alt="" />
            </div>
            <div className="product-content">
              <h2 className="product-title">{cartItem.title}</h2>
              <p className="product-description">{cartItem.description}</p>
              <div className="product-extra-info">
                <p className="product-price">${cartItem.price}</p>
                <button
                  className="cart-button"
                  onClick={() => removeFromCart(cartItem.cartId)}
                >
                  Remove from Cart
                </button>
                <p className="product-category">{cartItem.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
