import { useProduct } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";

export function Product() {
  const { data, loading, error } = useProduct();
  const { handleCart } = useCart();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1 className="shop-header">Shop</h1>
      <div className="products-container">
        {data.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image-container">
              <img className="product-image" src={product.image} alt="" />
            </div>
            <div className="product-content">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-extra-info">
                <p className="product-price">${product.price}</p>
                <button
                  className="cart-button"
                  onClick={() => handleCart(product)}
                >
                  Add to Cart
                </button>
                <p className="product-category">{product.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
