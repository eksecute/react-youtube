import React, { useState } from 'react';
import styles from "./eventsStyle.module.scss";
import TimeStampButton from "../TimeStampButton/TimeStampButton";

export default function Event(props) {
  const { timeStamp } = props;

  const [showDescription, setShowDescription] = useState(false);

  function openInfo() {
    showDescription ? setShowDescription(false) : setShowDescription(true)
  }
  
  return (
    <div className={styles.item}
         style={{ borderColor: timeStamp.highlight }}
    >

        <div className={styles.item_wrapper}>
            <TimeStampButton timeStamp={ timeStamp }/>
            { showDescription
                  ? <div className={styles.item_wrapper_descriptionOpened}>{ timeStamp.description }</div>
                  : <div className={styles.item_wrapper_description}>{ timeStamp.description }</div>
            }
        </div>

        <button
            className={styles.item_moreBtn}
            onClick={ openInfo }
        >
            { showDescription
                ? <span>X</span>
                : <span>i</span>
            }
        </button>

    </div>
  );
};