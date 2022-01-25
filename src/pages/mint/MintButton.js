import React, { useState } from "react";

import { MINVALUE, MAXVALUE } from "../../constant/Constant";
import styles from "./MintButton.module.css";

const MintButton = (props) => {
  const [mintCount, setMintCount] = useState(1);
  return (
    <div
      className="position-relative d-flex align-items-center mt-4 justify-content-around"
      style={{ width: "500px" }}
    >
      <div className="d-flex">
        <button
          className={`btn btn-app-primary ${styles.mintcountchange}`}
          onClick={() => {
            if (mintCount > MINVALUE) setMintCount(mintCount - 1);
          }}
        >
          -
        </button>
        <span className={`form-control ${styles.inputMint}`}>{mintCount}</span>
        <button
          className={`btn btn-app-primary ${styles.mintcountchange}`}
          onClick={() => {
            if (mintCount < MAXVALUE) {
              setMintCount(mintCount + 1);
            }
          }}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className={`btn btn-app-primary position-relative ${styles.mintbutton}`}
        onClick={() => props.handleMint(mintCount)}
      >
        <span className="fw-600 fp-16">
          Mint {mintCount} ({(0.1 * mintCount).toFixed(1)} ETH)
        </span>
      </button>
    </div>
  );
};

export default MintButton;
