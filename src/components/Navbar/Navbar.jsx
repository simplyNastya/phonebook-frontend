import { useSelector } from "react-redux";
import { RiContactsBookLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import useWindowSize from "../../services/hooks/useWindowSize";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";
import { isUserLogin } from "../../redux/auth/auth-selectors";

import styles from "./navbar.module.css";

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const { width } = useWindowSize();

  return (
    <>
      <header className={styles.headerSection}>
        <div className={styles.headerSectionContainer}>
          <nav className={styles.nav}>
            <NavLink to="/" className={styles.link}>
              <RiContactsBookLine className={styles.logo} />
              {width <= 527 ? null : (
                <p className={styles.logoText}>PhoneBook</p>
              )}
            </NavLink>
            {!isLogin && <NavbarAuth />}
            {isLogin && (
              <div className={styles.navWrapper}>
                <NavLink to="/contacts" className={styles.link}>
                  Contacts
                </NavLink>
                <NavbarUser />
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
