import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = (data) => dispatch(register(data));

  return (
    <>
      <h1>Let`s start from registration :)</h1>
      <RegisterForm onSubmit={onRegister} />
    </>
  );
};

export default RegisterPage;
