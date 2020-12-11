import React from 'react';
import PropTypes from 'prop-types';
import styles from "../playerStyles.module.scss";

const Controls = props => {
  return (
      <div className={styles.playerControls}>

        {/*   Progress bar  */}
        <div className={styles.playerControlsProgress}
             ref={progressRef}
             onClick={scrub}
        >

          <div className={styles.playerControlsProgress__PhsAndEvs}>

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
              })}
            {/*      ==============================    */}


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

          <div className={styles.playerControlsProgress__Filled}
               style={{flexBasis: progress}}
          />

          <div className={styles.playerControlsProgress__Marker}
               style={{left: progress}}
          />

        </div>

      </div>
  );
};

Controls.propTypes = {

};

export default Controls;