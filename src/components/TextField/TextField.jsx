import styles from "./textField.module.css";

const TextField = ({ label, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
};

export default TextField;
