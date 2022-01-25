import React from 'react';

import styles from './FaqSection.module.css';

const FAQS = [
  {
    title: 'How many pieces are there in the collection?',
    text: 'xxxx',
  },
  {
    title: 'Are there traits?',
    text: 'Yes, there are 11 traits. They are as follows: Primary color, secondary color, background color , set, image definition, lighting, lighting intensity, material texture, light source, image/video. There are 3 additional traits for videos, lights animated, colors animated and motion animated',
  },
  {
    title: 'Is the project on chain?',
    text: 'The art is rendered off chain, but the images generated will be stored on the Arweave block chain(onchain).For those who don’t know what this means, it means the stored data isn’t located on a website where if hosting fees were to stop being paid / the website went down, you’d lose the data to your NFT(viewing it and more).Having the art on the Arweave blockchain means it relies on no domains and is stored on the blockchain accessible and viewable by you, for essentially ever(long after you’re gone).This is very important for the future of NFTs and an approach we wanted to ensure we took as much as possible.',
  },
  // {
  //   title: 'Will there be prints for collectors?',
  //   text: 'We have partnered with supplier that accepts crypto as payment and verifies the NFT is in your wallet before you are able to purchase the print, along with this you get a letter of verification showcasing you are the true owner. Size of the prints and type of the prints are customizable, however we will likely only lock in 2 options(or even 1) to ensure variation across prints isn’t too large.',
  // },
]

const FaqSection = () => {
  return (
    <div className={styles.container}>
      <div className={`row ${styles.row}`}>
        <div className="col-md-5 app-block">
          <h2 className={styles.title}>FAQs</h2>
        </div>
        <div className="col-md-7 white app-block">
          {FAQS.map((faq, idx) => (
            <div key={`faq-${idx}`}>
              <h4 className={`${styles.subtitle} ${idx === 0 ? "mt-0" : ""}`}>{faq.title}</h4>
              <p className={styles.text}>{faq.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
