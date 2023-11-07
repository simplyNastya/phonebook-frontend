import PropTypes from "prop-types";
import useForm from "../../services/hooks/useForm";
import initialState from "./initialState";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import fields from "./fields";
import styles from "./loginForm.module.css";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <Button className={styles.btn}>Login</Button>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
