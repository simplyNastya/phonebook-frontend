import { NavLink } from 'react-router-dom';
import styles from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/register" className={styles.link}>
            Register
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavbarAuth;
