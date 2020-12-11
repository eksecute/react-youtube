import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from "./progressBarStyles.module.scss";
import Context from "../../context";

const ProgressBar = props => {
  const { progress, scrub, progressRef, phaseTimeStamps, eventTimeStamps } = useContext(Context);
  // const context = useContext(Context);

  return (
    <div
        className={styles.progress}
        ref={progressRef}
        onClick={scrub}
    >

        <div className={styles.progress__phasesAndEvents}>

          {/*      ========== Phases ===========        */}
          {
            phaseTimeStamps.forEach( (el, idx) => {
              const toAppendStyles = {
                left: `${el.start}px`,
                width: `${el.end - el.start}px`,
                // background: state.colors[idx]
              };

              return <div className={styles.playerControlsProgress__phsAndEvs}
                          style={toAppendStyles}
              />
            })
          }



          {/*<div className={styles.playerControlsProgress__phsAndEvs_phase1}*/}
          {/*     style={{width: phaseTimeStamps.}}*/}
          {/*/>*/}
          {/*<div className={styles.playerControlsProgress__phsAndEvs_phase2}*/}
          {/*     style={{width: phaseTimeStamps.}}*/}
          {/*/>*/}
          {/*<div className={styles.playerControlsProgress__phsAndEvs_phase3}*/}
          {/*     style={{width: phaseTimeStamps.}}*/}
          {/*/>*/}

          {/*/!*      ========== Events ============        *!/*/}
          {/*<div className={styles.playerControlsProgress__phsAndEvs_event1}*/}
          {/*     style={{left: progress}}*/}
          {/*/>*/}
          {/*<div className={styles.playerControlsProgress__phsAndEvs_event2}*/}
          {/*     style={{left: progress}}*/}
          {/*/>*/}
          {/*<div className={styles.playerControlsProgress__phsAndEvs_event3}*/}
          {/*     style={{left: progress}}*/}
          {/*/>*/}
          {/*      ==============================    */}

        </div>

        <div className={styles.progress__filled}
             style={{flexBasis: progress}}
        />

        <div className={styles.progress__marker}
             style={{left: progress}}
        />

    </div>

  );
};

ProgressBar.propTypes = {

};

export default ProgressBar;