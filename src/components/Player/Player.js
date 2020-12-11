import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from "./playerStyles.module.scss";
import _video from "../../data/groundSafetyTrainingVideo.mkv";
// import Controls from "react-video-markers/src/Controls";
import ProgressBar from "./ProgressBar/ProgressBar";

const Player = props => {
  const { vidRef, toggleVideo } = props;

  //todo move styles to separate file
  return (
      <div className={styles.playerWrapper}>

        <video
            className={styles.playerWrapperVideo}
            ref={vidRef}
            src={_video}
            // autoPlay
            onClick={toggleVideo}
        />

        <ProgressBar/>

      </div>
  );
};

Player.propTypes = {

};

export default Player;