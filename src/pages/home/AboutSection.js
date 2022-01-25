import React from 'react';

import styles from './AboutSection.module.css';

const AboutSectin = () => {
  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-md-6">
          <div className="me-md-4">
            <h2 className={styles.title}>ABOUT THE PROJECT</h2>
            <div className={styles.description}>
              <p className={`mb-5 ${styles.text}`}>The natural world around us is defined by shapes not found in Euclid’s classical geometry, which uses circles, spheres, squares, cube and triangles. Polish born French/American mathematician, Benoit Mandelbrot introduced fractals to the world in 1975, creating a new field of geometry which with the aid of computers can model and describe countless structures which we seen in the real world.</p>
              <p className={styles.text}>Lose yourself in images unlike anything you have seen before. You can spend hours getting lost in these mesmerizing patterns and endless spirals, with textures ranging from smooth to fine-grained and near infinite color palettes.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ps-md-5">
          <img
            src="https://images.squarespace-cdn.com/content/v1/61d11e63bc8657245c7031bd/48496c46-d81e-496d-8413-56d3bfba26fb/frax_285982_std.jpg"
            alt="ABOUT THE PROJECT - The natural world around us is defined by shapes not found in Euclid’s classical geometry, which uses circles, spheres, squares, cube and triangles. Polish born French/American mathematician, Benoit Mandelbrot introduced fractals to the world in 1975, creating a new field of geometry which with the aid of computers can model and describe countless structures which we seen in the real world. Lose yourself in images unlike anything you have seen before. You can spend hours getting lost in these mesmerizing patterns and endless spirals, with textures ranging from smooth to fine-grained and near infinite color palettes."
            loading="lazy"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSectin;
