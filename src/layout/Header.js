import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { AiOutlineTwitter } from 'react-icons/ai';
import { MdLink } from 'react-icons/md';
import { HamburgerButton } from 'react-hamburger-button';

import styles from './Header.module.css';

const MENU_LIST = [
  {
    path: '/',
    text: 'Home',
  },
  // {
  //   path: '/new-page',
  //   text: 'Mint',
  // },
];

const Header = () => {
  const { pathname } = useLocation();
  const mediaQuery = useMediaQuery({ query: '(min-width: 768px)' });
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMobile(!mediaQuery);
    if (mediaQuery) {
      setIsOpen(false);
    }
  }, [mediaQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={`align-items-center justify-content-base gap-3 ${isMobile ? "d-none" : "d-flex"}`}>
          {MENU_LIST.map((menu, idx) => (
            <Link key={`menu-${idx}`} to={menu.path} className={`${styles.navmenu} ${pathname === menu.path ? styles.navactive : ""}`}>{menu.text}</Link>
          ))}
        </div>
        <Link to="/" className={`decoration-none ${styles.title} ${isMobile && isOpen ? "black hover-black" : "white hover-white"}`}>MandelBlocks</Link>
        {isMobile ? (
          <div className="hand">
            <HamburgerButton
              open={isOpen}
              onClick={handleOpen}
              width={24}
              height={16}
              strokeWidth={2}
              color={isMobile && isOpen ? "black" : "white"}
              animationDuration={0.5}
            />
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center gap-2">
            <a href="https://discord.gg/p5zfsT2a" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
              <MdLink className="fp-28" />
            </a>
            <a href="https://twitter.com/MandelBlocks" target="_blank" rel="noreferrer" className="white decoration-none hover-white">
              <AiOutlineTwitter className="fp-28" />
            </a>
          </div>
        )}
      </div>
      <div className={`${styles.modalmenu} ${isOpen ? styles.openmenu : ""}`}>
        <div className={styles.modalbg} />
        <div className={styles.modalWrapper}>
          <nav className={styles.modalNavList}>
            <div className={styles.modalNavFolder}>
              <div className={styles.modalNavContent}>
                {MENU_LIST.map((menu, idx) => (
                  <div key={`menu-${idx}`} onClick={handleOpen}>
                    <Link to={menu.path} className={`black decoration-none hover-black ${styles.modalMenuText}`}>{menu.text}</Link>
                  </div>
                ))}
              </div>
              <div className={styles.modalNavActions}>
                <a href="https://discord.gg/p5zfsT2a" target="_blank" rel="noreferrer" className="black decoration-none hover-black">
                  <MdLink className="fp-28" />
                </a>
                <a href="https://twitter.com/MandelBlocks" target="_blank" rel="noreferrer" className="black decoration-none hover-black">
                  <AiOutlineTwitter className="fp-28" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
