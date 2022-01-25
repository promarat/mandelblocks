import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import styles from './WalletButton.module.css';

const WALLETS = [
  {
    name: (typeof window.ethereum !== 'undefined') ? 'MetaMask' : 'Injected (unsupported)',
    icon: 'https://thirdweb.com/logos/metamask-fox.svg',
    installExtension: (typeof window.ethereum !== 'undefined') ? true : false
  },
  {
    name: 'WalletConnect',
    icon: 'https://thirdweb.com/logos/walletconnect-logo.svg',
    installExtension: true
  },
  {
    name: 'Coinbase Wallet',
    icon: 'https://thirdweb.com/logos/coinbase-wallet-logo.svg',
    installExtension: true
  },
];

const WalletButton = (props) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }
  
  return (
    <div className="align-items-center d-flex flex-column">
      <button type="button" className={`btn btn-app-primary position-relative ${styles.wallettoggle}`} onClick={toggleOpen}>
        <span className="fw-500 fp-16 px-5">Connect Wallet</span>
        <AiOutlineDown className="fp-12 white position-absolute" style={{ top: "12px", right: "12px" }} />
      </button>
      <div className={`${styles.walletContainer} ${open ? styles.openContainer : ""}`}>
        <div className="row g-2">
          {WALLETS.map((wallet, idx) => (
            <div key={`wallet-${idx}`} className={`col-sm-4 ${styles.buttonWrapper}`}>
              <button
                type="button"
                className={`btn btn-outline-app-primary d-flex align-items-center w-100  ${wallet.installExtension ? "" : "disabled"} ${styles.button}`}
                onClick={() => props.connect(wallet.name)}
              >
                <img
                  src={wallet.icon}
                  alt=""
                  style={{ width: "24px", height: "auto" }}
                />
                <span className={styles.buttonText}>{wallet.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletButton;
