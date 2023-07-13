import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

import styles from "./registerPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();

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
