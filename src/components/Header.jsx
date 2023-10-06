import { useState } from "react";
import { Link } from "react-router-dom";
import { itemCountContext } from "../hooks/useCartContext";
import homeIcon from "../assets/imgs/home.svg";
import shopIcon from "../assets/imgs/shop.svg";
import cartIcon from "../assets/imgs/cart.svg";

export function Header() {
  const [navSelector, setNavSelector] = useState("home");
  const { itemCount } = itemCountContext();

  const handleSelector = (button) => {
    setNavSelector(button);
  };

  return (
    <header>
      <h1>Electronics Store</h1>
      <nav className="header-navigation">
        <ul className="header-navigation-list">
          <Link to="/" className="nav-link">
            <li
              className={`nav-item ${navSelector === "home" ? "clicked" : ""}`}
              onClick={() => handleSelector("home")}
            >
              <img src={homeIcon} alt="Home Button Icon" />
              <button className="navigation-button">Home</button>
            </li>
          </Link>
          <Link to="/store" className="nav-link">
            <li
              className={`nav-item ${navSelector === "store" ? "clicked" : ""}`}
              onClick={() => handleSelector("store")}
            >
              <img src={shopIcon} alt="Shop Button Icon" />
              <button className="navigation-button">Store</button>
            </li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li
              className={`nav-item ${navSelector === "cart" ? "clicked" : ""}`}
              onClick={() => handleSelector("cart")}
            >
              <img src={cartIcon} alt="Cart Button Icon" />
              <button className="navigation-button">Cart</button>
              <div className="item-count">{itemCount}</div>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
