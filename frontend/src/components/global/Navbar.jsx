import "../../styles/components/navbar.css";
import { BiUser } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCart } from "../../hooks/useCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Navbar = () => {
  const { showCart } = useCart();
  const { products } = useContext(CartContext);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    let count = 0;
    products.map((product) => (count += product.count));
    setProductsCount(count);
  }, [products]);

  return (
    <div className="navbar primary-bg">
      <div className="container">
        <div className="logo">
          <img src="./images/logo-white.svg" alt="Logo" />
        </div>

        <div className="searchbar">
          <input type="text" placeholder="Search any things" />
          <div className="outline-white-btn search-btn">Search</div>
        </div>

        <div className="user-links">
          <div className="sign-in-btn">
            <BiUser />
            <span>Sign In</span>
          </div>
          <div className="cart-btn" onClick={showCart}>
            <RiShoppingCart2Line />
            <span className="secondary-bg primary-color">{productsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
