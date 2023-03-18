import "../../styles/components/navbar.css";
import { BiUser } from "react-icons/bi";
import { RiShoppingCart2Line } from "react-icons/ri";

export const Navbar = () => {
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
          <div className="cart-btn">
            <RiShoppingCart2Line />
            <span className="secondary-bg primary-color">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};