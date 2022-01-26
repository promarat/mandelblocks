import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import WalletButton from "./WalletButton";
import styles from "./InventoryTab.module.css";
import AppSpinner from "../../components/loading/AppSpinner";

const InventoryTab = (props) => {
  const [metaDataJson, setMetaDataJson] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (props.data.length) {
        let data = props.data;
        let metaData = [];
        setLoading(true);
        for (var key in data) {
          let eUrl = `https://ipfs.io/ipfs/abc/${data[
            key
          ].toNumber()}.json`;
          let metaJson = await getMetadata(eUrl);
          metaData.push(metaJson);
        }
        setLoading(false);
        setMetaDataJson(metaData);
      }
    };
    fetchData();
  }, [props.data]);

  const getMetadata = async (url) => {
    let obj = await (await fetch(url)).json();
    return obj;
  };
  return (
    <div className={styles.container}>
      {!props.flag ? (
        <>
          <div className={styles.text}>
            Connect your wallet to see your owned drops
          </div>
          <WalletButton connect={(name) => props.connect(name)} />
        </>
      ) : (
        <div
          className={`list-scrollbar container border`}
          style={{
            height: "100%",
            width: "100%",
            zIndex: "1",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
            {metaDataJson.map((item, key) => {
              return item.description === "Mandel Blocks Picture" ? (
                <div
                  key={key}
                  className={styles.responsible}
                  style={{
                    // marginBottom: "10px",
                    // width: "20%",
                    // padding: "10px",
                    boxShadow: "0px 0px 5px #000",
                  }}
                >
                  <img
                    src={`${item.image}`}
                    srcSet={`${item.image}`}
                    alt={item.name}
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              ) : null;
            })}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
            {metaDataJson.map((item, key) =>
              item.description === "Mandel Blocks Video" ? (
                <div
                  key={key}
                  className={styles.responsible}
                  style={{
                    // marginBottom: "10px",
                    // width: "20%",
                    // padding: "10px",
                    boxShadow: "0px 0px 5px #000",
                  }}
                >
                  <ReactPlayer
                    url={item.image}
                    playing={true}
                    className={styles.videoNft}
                    width="100%"
                    height="100%"
                    loop={true}
                  />
                </div>
              ) : null
            )}
          </div>
          {loading && <AppSpinner absolute />}
        </div>
      )}
    </div>
  );
};

export default InventoryTab;
