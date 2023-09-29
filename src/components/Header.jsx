import { Link } from "react-router-dom";
import homeIcon from "../assets/imgs/home.svg";
import shopIcon from "../assets/imgs/shop.svg";
import cartIcon from "../assets/imgs/cart.svg";

export function Header() {
  return (
    <header>
      <h1>Electronics Store</h1>
      <nav className="header-navigation">
        <ul className="header-navigation-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <img src={homeIcon} alt="Home Button Icon" />
              <button className="navigation-button">Home</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/store" className="nav-link">
              <img src={shopIcon} alt="Shop Button Icon" />
              <button className="navigation-button">Store</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <img src={cartIcon} alt="Cart Button Icon" />
              <button className="navigation-button">Cart</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
