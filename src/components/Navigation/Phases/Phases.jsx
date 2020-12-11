import React from 'react';
import PropTypes from 'prop-types';
import styles from "./phasesStyles.module.scss";

const Phases = props => {

  const { jumpTo, phaseTimeStamps } = props;

  return (
      <div className={`${styles.phases}`}>

        {/*{*/}
        {/*  state.phaseTimeStamps.forEach( el => {*/}
        {/*    return <button onClick={ jumpTo.bind(this, el) }>*/}

        {/*    </button>*/}
        {/*  })*/}
        {/*}*/}


        <button
            className={`${styles.phases_btn} ${styles.phases_btn__one} mr-2`}
            onClick={ jumpTo.bind(this, phaseTimeStamps[0]) }>
          {/*onClick={ jumpTo.bind(this, phaseTimeStamps[0]) }>*/}
          Phase 1
          {/*<PlayIcon/>*/}
        </button>

        <button
            className={`${styles.phases_btn} ${styles.phases_btn__two} mr-2`}
            onClick={ jumpTo.bind(this, phaseTimeStamps[1]) }>
          Phase 2
          {/*<PlayIcon/>*/}
        </button>

        <button
            className={`${styles.phases_btn} ${styles.phases_btn__three}`}
            onClick={ jumpTo.bind(this, phaseTimeStamps[2]) }>
          Phase 3
          {/*<PlayIcon/>*/}
        </button>

      </div>
  );
};

Phases.propTypes = {

};

export default Phases;