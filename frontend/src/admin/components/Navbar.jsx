import styles from "../styles/components/Navbar.module.css";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.adminNavbar}>
      <div className={styles.logo}>
        <img src="/images/logo-dark.svg" alt="Logo" />
      </div>

      <div className={styles.searchbar}>
        <input type="text" />
        <div className={`primary-btn ${styles.searchBtn}`}>Search</div>
      </div>

      <div className={styles.logoutBtn}>
        <Link to={"/logout"}>
          <BiLogOut /> Гарах
        </Link>
      </div>
    </div>
  );
};
