import { Outlet } from 'react-router-dom';

import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            The best app to collect your contacts
          </h1>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default HomePage;
