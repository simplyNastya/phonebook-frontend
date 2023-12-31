import useForm from "../../services/hooks/useForm";
import initialState from "./initialState";
import TextField from "../TextField/TextField";
import fields from "./fields";
import Button from "../Button/Button";
import styles from "./registerForm.module.css";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        value={name}
        autoComplete="off"
        onChange={handleChange}
        {...fields.name}
      />
      <TextField
        value={email}
        autoComplete="off"
        onChange={handleChange}
        {...fields.email}
      />
      <TextField
        value={password}
        autoComplete="off"
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
