import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

import styles from "./VideoSection.module.css";
import MandelblockVideo from "../../assets/images/MandelBlocks_Video_1.ogg";

const VideoSection = () => {
  const [autoplay, setAutoplay] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={`d-flex justify-content-center position-relative ${styles.row}`}
      >
        <ReactPlayer
          url={MandelblockVideo}
          playing={autoplay}
          className={`${styles.mandelblockvideo}`}
          width="100%"
          onEnded	={() => setAutoplay(false)}
          height="100%"
        />
        <div className={`${styles.content} ${autoplay ? "d-none" : ""}`}>
          <h2 className={styles.title}>
            A visualization of the Beauty of Mathematics
            <div className="d-flex justify-content-center mt-5">
              <div className={styles.playVideo} onClick={() => setAutoplay(true)}>
                <FaPlay className={styles.playIcon} />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
