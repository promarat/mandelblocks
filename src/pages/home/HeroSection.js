import React from 'react';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionBackground}>
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/43208d3a-13f4-4ee6-afeb-0fff79c02f69/Cave+Paintings+Found+on+Venus.jpg"
          alt=""
          className={styles.image}
        />
        <div className={styles.bgOverlay} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>A visualization of the Beauty of Mathematics</h2>
      </div>
    </div>
  );
};

export default HeroSection;
