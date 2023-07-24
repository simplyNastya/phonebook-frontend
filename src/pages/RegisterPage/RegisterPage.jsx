import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { register } from "../../redux/auth/auth-operations";
import { getAuth } from "../../redux/auth/auth-selectors";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Loader from "../../components/Loader/Loader";

import styles from "./registerPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(getAuth);

  if (loading) {
    return <Loader />;
  }

  const onRegister = (data) => dispatch(register(data));

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Please fill in the forms so we can start!
      </h1>
      <RegisterForm onSubmit={onRegister} />
    </div>
  );
};

export default RegisterPage;
