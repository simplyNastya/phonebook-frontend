import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../../redux/auth/auth-selectors";
import { logout } from "../../../redux/auth/auth-operations";
import Button from "../../Button/Button";
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
      <Button className={styles.logoutBtn} onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default NavbarUser;
