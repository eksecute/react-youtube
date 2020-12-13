import React, {useState, useContext} from 'react';
import _video from "../../data/groundSafetyTrainingVideo.mkv";
import styles from './playerStyles.module.scss'
import ProgressBar from "./ProgressBar/ProgressBar";
import Context from "../context";
import VolumeToggler from "./VolumeToggler/VolumeToggler";
import VideoPlug from "./VideoPlug/VideoPlug";
import DisplayTime from "./DisplayTime/DisplayTime";

export default function Player(props) {
  const { toggleVideo, vidRef } = props;
  const { video } = useContext(Context);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setMuted] = useState(false);

  const handlePlay = () => {
    if (!isLoaded) {
      setIsLoaded(true);
      toggleVideo()
    } else {
      toggleVideo();
      setIsPaused(vidRef.current.paused);
    }
  };
  const toggleVolume = () => {
    if (isMuted) {
      setMuted(false);
      video.volume = 1;
    } else {
      setMuted(true);
      video.volume = 0;
    }
  };

  let videoPlug = null;
  if (vidRef.current && vidRef.current.paused) {
    videoPlug = <VideoPlug handlePlay={ handlePlay }/>
  }

  return (
      <>
        <div className={ styles.player }>

          <video
              className={`${styles.player__video} ${ isPaused || !isLoaded ? styles.player__video_paused : null }`}
              ref={ vidRef }
              src={ _video }
              onClick={ handlePlay }
          />

          { videoPlug }

          <div className={ styles.player__progress }>
            { isLoaded
                ? <ProgressBar/>
                : null
            }
          </div>

          <VolumeToggler
              toggleVolume={ toggleVolume }
              isMuted={ isMuted }
          />

            { isLoaded
                ? <DisplayTime/>
                : null
            }

        </div>
      </>
  );
};