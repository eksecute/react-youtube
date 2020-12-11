import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../Player/playerStyles.module.scss";

const Events = props => {
  const { jumpTo, eventTimeStamps } = props;

  console.log(eventTimeStamps);

  return (
      <div className={`${styles.navigationEvents}`}>

        <div className={styles.navigationEventsItem}>
          <button
              className={`${styles.navigationEventsItemBtn} ${styles.navigationEventsItemBtnOne}`}
              onClick={ jumpTo.bind(this, eventTimeStamps[0]) }>
            Event 1
          </button>
          <div className="pl-2">Description</div>
        </div>

        <div className={styles.navigationEventsItem}>
          <button
              className={`${styles.navigationEventsItemBtn} ${styles.navigationEventsItemBtnTwo}`}
              onClick={ jumpTo.bind(this, eventTimeStamps[1]) }>
            Event 2
          </button>
          <div className="pl-2">Description</div>
        </div>

        <div className={styles.navigationEventsItem}>
          <button
              className={`${styles.navigationEventsItemBtn} ${styles.navigationEventsItemBtnThree}`}
              onClick={ jumpTo.bind(this, eventTimeStamps[2]) }>
            Event 3
          </button>
          <div className="pl-2">Description</div>
        </div>

      </div>
  );
};

Events.propTypes = {

};

export default Events;