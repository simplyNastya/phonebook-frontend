import { Outlet } from 'react-router-dom';

import styles from './authLayout.module.css';

const AuthLayout = () => {
  return (
    <section className={styles.heroSection}>
      <Outlet />
    </section>
  );
};

export default AuthLayout;
