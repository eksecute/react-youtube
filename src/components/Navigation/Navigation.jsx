import React, { useContext } from 'react';
import styles from "./navigationStyles.module.scss";
import TimeStampButton from "../TimeStampButton/TimeStampButton";
import Event from "../Event/Event";
import Context from "../context";

export default function Navigation (props) {
  const { phaseTimeStamps, eventTimeStamps, phaseColors } = useContext(Context);

  return (
      <div className={styles.navigation}>
        <div className={`${styles.navigation_phases}`}>
          {
            phaseTimeStamps.map((el, idx) => {
              return <TimeStampButton key={ idx }
                                      timeStamp={el}
                                      color={ phaseColors[idx] }
              />
            })
          }
        </div>

        <div className={`${styles.navigation_events}`}>
          {
            eventTimeStamps.map((el, idx) => {
              return <Event key={ idx }
                            timeStamp={ el }
              />
            })
          }
        </div>
      </div>
  );
};