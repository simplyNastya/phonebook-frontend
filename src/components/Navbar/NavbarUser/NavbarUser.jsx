import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/auth/auth-selectors";
import { logout } from "../../../redux/auth/auth-operations";
import styles from "./navbarUser.module.css";

const NavbarUser = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.userName}>{name}</p>
      <button onClick={onLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
