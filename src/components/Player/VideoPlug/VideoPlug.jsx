import React from 'react';
import styles from "./videoPlugStyle.module.scss";

export default function VideoPlug (props) {
  const { handlePlay } = props;

  return (
      <div
          className={ styles.plug }
          onClick={ handlePlay }
      />
  );
};
