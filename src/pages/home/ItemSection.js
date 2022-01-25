import React from 'react';

import styles from './ItemSection.module.css';

const USER_ITEMS = [
  {
    image: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/1641108115408-MKOJMOO019997112GHM6/Solarbot.gif',
    name: 'MandelBlox',
    role: 'Co-Founder',
    text: 'Artist, Creator, NFT DeGen. Active supporter of Web3 artists and helping build long term Web3 communities',
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/1641108411562-OICVZXOMWAMV8W8ZTQJ7/PL+Barfly.png',
    name: 'LotsofSpaghetti',
    role: 'Co-Founder',
    text: 'Right hand on all aspects of Mandelblocks project. Building communities and supporting Web3 artists',
  },
];

const ItemSection = () => {
  return (
    <div className={styles.container}>
      <div className={`row ${styles.row}`}>
        {USER_ITEMS.map((item, idx) => (
          <div key={`item-${idx}`} className="col-sm-6">
            <div className="w-50" style={{ marginBottom: "4%" }}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt="" className={styles.image} />
              </div>
            </div>
            <div>
              <h2 className={styles.title}>{item.name}</h2>
              <p className={styles.subtitle}>{item.role}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSection;
