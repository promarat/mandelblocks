import React from "react";
import WalletButton from "./WalletButton";
import MintButton from "./MintButton";
import styles from "./MintTab_.module.css";

const MintTab = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div
          className="d-flex flex-column align-items-center g-4"
          style={{ zIndex: "1" }}
        >
          <h1 className={styles.title}>MandelBlocks</h1>
          {/* <h2 className={styles.text}>
            Trees and Butterflies playing in the summer
          </h2> */}
          <h5 className={styles.address}>{props.account}</h5>
          {!props.flag ? (
            <WalletButton connect={(name) => props.connect(name)} />
          ) : (
            <MintButton
              handleMint={(mintCount) => props.handleMint(mintCount)}
            ></MintButton>
          )}
          <div className={styles.desc}>{props.tsn} / 723 claimed</div>
        </div>
      </div>
    </>
  );
};

export default MintTab;
