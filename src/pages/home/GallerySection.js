import React from 'react';

import styles from './GallerySection.module.css';

const IMAGES = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/3dfec128-4636-4fee-b4ad-a802be7a0680/Mech+Warrior+Kingdom.jpg',
    alt: 'Mech Warrior Kingdom.jpg',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/326e07fc-408f-4aef-8cd4-a6c75f702cab/BF51A99B-680E-4D6D-86E8-F9F0BBFA28BC_1_101_o.jpeg',
    alt: 'BF51A99B-680E-4D6D-86E8-F9F0BBFA28BC_1_101_o.jpeg',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/ff4e1edb-5dab-402c-98a7-b754887f2d74/Skeletor.jpg',
    alt: 'Skeletor.jpg',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/53b0ca07-9f88-4da0-8808-df23a3436ef4/Towers+on+the+Forest+FLoor.jpg',
    alt: 'Towers on the Forest FLoor.jpg',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/7b6dd016-3b07-4bcb-8d7d-5a387678ab0d/3B03DB44-1F5C-4E52-A317-A9E2AE013AE3_1_101_o.jpeg',
    alt: '3B03DB44-1F5C-4E52-A317-A9E2AE013AE3_1_101_o.jpeg',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/b6e8da9c-fd2d-4593-aa18-69895917e114/1AB07375-4F07-4660-A95A-88090AFB5376_1_101_o.jpeg',
    alt: '1AB07375-4F07-4660-A95A-88090AFB5376_1_101_o.jpeg',
  },
]

const GallerySection = () => {
  return (
    <div className={styles.container}>
      <div className={`row ${styles.row}`}>
        {IMAGES.map((img, idx) => (
          <div key={`gallery-${idx}`} className="col-6 col-sm-12 col-md-6">
            <div className={styles.itemWrapper}>
              <img src={img.src} alt={img.alt} className={styles.galleryImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
