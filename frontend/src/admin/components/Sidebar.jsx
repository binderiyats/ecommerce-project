import styles from "../styles/components/Sidebar.module.css";
import { RxDashboard } from "react-icons/rx";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <RxDashboard /> Хянах самбар
        </li>
        <li className={`${styles.menuItem} ${styles.active}`}>
          <RxDashboard /> Бүтээгдэхүүнүүд
        </li>
        <li className={styles.menuItem}>
          <RxDashboard /> Хянах самбар
        </li>
        <li className={styles.menuItem}>
          <RxDashboard /> Хянах самбар
        </li>
      </ul>
    </div>
  );
};
