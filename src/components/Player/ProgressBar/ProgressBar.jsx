import React, { useContext, useState, useRef } from 'react';
import styles from "./progressBarStyles.module.scss";
import Context from "../../context";

export default function ProgressBar () {
  const {
    video,
    scrub,
    progressRef,
    phaseTimeStamps,
    progress,
    setProgress,
    eventTimeStamps,
    phaseColors
  } = useContext(Context);

  const [isMouseDown, setMouseDown] = useState(false);

  const startMouseDown = (e) => {
    setMouseDown(true);
  };
  const endMouseDown = (e) => {
    setMouseDown(false);
  };

  return (
    <div
        className={ styles.progress }
        ref={ progressRef }
        onClick={ scrub }
        onMouseDown={startMouseDown}
        onMouseUp={endMouseDown}
        onMouseLeave={endMouseDown}
        onMouseMove={(e) => isMouseDown ? scrub(e) : null}
    >
        {/* phases tags */}
        { phaseTimeStamps.map((el, idx) => {
            const startPercent = (el.start / video.duration) * 100;
            const endPercent = (el.end / video.duration) * 100;
            let toAppendStyles = {
              marginLeft: `${ startPercent }%`,
              width: `${ endPercent - startPercent }%`,
              background: phaseColors[idx],
              opacity: .9,
              zIndex: -2
            };

            return <div className={ styles.progress__phaseEvent }
                        style={ toAppendStyles }
                        key={ idx }
            />
        })}

        {/* events tags */}
        { eventTimeStamps.map((el, idx) => {
            const startPercent = ( el.start / video.duration ) * 100;
            let toAppendStyles = {
              marginLeft: `${ startPercent }%`,
              width: `3%`,
              background: el.highlight,
              opacity: 1,
              zIndex: -1
            };

            return <div className={ styles.progress__phaseEvent }
                        style={ toAppendStyles }
                        key={idx}
            />
          })}

        <div className={ styles.progress__clickReader }/>
        <div
            className={ styles.progress__filled }
             style={{ flexBasis: progress }}
        />
        <div
            className={ styles.progress__marker }
            style={{ left: progress }}
        />
    </div>
  );
}