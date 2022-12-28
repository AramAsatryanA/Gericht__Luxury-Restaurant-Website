import { useRef, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

import styles from "./VideoSection.module.css";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  function videoPlayHandler() {
    setIsPlaying((previousState) => !previousState);

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  return (
    <section className={styles.section}>
      <div className={`section__overlay ${styles.overlay}`}>
        <div className={styles["icon-circle"]} onClick={videoPlayHandler}>
          {isPlaying ? (
            <BsPauseFill className={styles.icon} />
          ) : (
            <BsPlayFill className={styles.icon} />
          )}
        </div>
      </div>
      <video
        className={styles.video}
        src="/video/home-page__meal.mp4"
        typeof="video/mp4"
        controls={false}
        muted
        loop
        ref={videoRef}
      />
    </section>
  );
}

export default VideoSection;
