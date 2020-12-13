import React, { useContext, useState, useEffect, useRef } from 'react';
import Context from "../../context";
import styles from './displayTimeStyle.module.scss'

export default function DisplayTime() {
  const { video } = useContext(Context);
  const [currentTime, setCurrentTime ] = useState(null);
  const [totalTime, setTotalTime] = useState(null);

  useEffect(()=> {
    setTotalTime(timeToMins(video.duration));
    video.addEventListener('timeupdate', () => {
      setCurrentTime(timeToMins(video.currentTime))
    });
  },[]);

  const timeToMins = (data) => {
    const mins = (Math.floor(data / 60));
    const secs = (Math.floor(data % 60));

    return `${mins}:${secs}`
  };

  return (
      <div className={ styles.time }>
            { currentTime } / { totalTime }
      </div>
  );
};