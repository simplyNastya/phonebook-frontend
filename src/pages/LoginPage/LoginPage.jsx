import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import LoginForm from "../../components/LoginForm/LoginForm";

// import styles from './loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = (data) => dispatch(login(data));

  return (
    <>
      <h1>
        Nice to see you again, just log in and we will continue our trip :)
      </h1>
      <LoginForm onSubmit={onLogin} />
    </>
  );
};

export default LoginPage;
