import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { login } from "../../redux/auth/auth-operations";
import { getAuth } from "../../redux/auth/auth-selectors";
import LoginForm from "../../components/LoginForm/LoginForm";
import Loader from "../../components/Loader/Loader";

import styles from "./loginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(getAuth);

  if (loading) {
    return <Loader />;
  }

  const onLogin = (data) => dispatch(login(data));

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Nice to see you again, just sign in and we will continue our trip :)
      </h1>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
