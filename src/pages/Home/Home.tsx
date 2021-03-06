import React from 'react';
import reactIcon from 'src/assets/images/react-icon.png';
import styles from './home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>Hello guys</div>
      <img src={reactIcon} height="50" />
    </div>
  );
};

export default Home;
