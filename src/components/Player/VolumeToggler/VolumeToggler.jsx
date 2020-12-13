import React from 'react';
import styles from "./volumeTogglerStyles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";

export default function VolumeToggler (props) {
  const { toggleVolume, isMuted } = props;

  return (
      <div
          className={ styles.volume }
          onClick={ toggleVolume }
      >
        { isMuted
            ? <FontAwesomeIcon icon={ faVolumeMute }/>
            : <FontAwesomeIcon icon={ faVolumeUp }/>
        }
      </div>
  );
};
