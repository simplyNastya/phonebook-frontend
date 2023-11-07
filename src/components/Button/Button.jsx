import styles from "./button.module.css";

const Button = ({ type = "submit", className, onClick, children }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
