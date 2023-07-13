import styles from './button.module.css';

const Button = ({ type = 'submit', children }) => {
  return (
    <button className={styles.btn} type={type}>
      {children}
    </button>
  );
};

export default Button;
