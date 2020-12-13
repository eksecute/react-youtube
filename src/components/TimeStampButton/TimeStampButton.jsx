import React, {useContext} from 'react';
import styles from "./timeStampButtonStyle.module.scss";
import Context from "../context";

export default function TimeStampButton(props) {
  const { color, timeStamp } = props;
  const { jumpTo } = useContext(Context);

  return (
    <button
        className={`${styles.btn} mr-2`}
        onClick={ jumpTo.bind(null, timeStamp) }
        style={ color ? { background: color } : { background: timeStamp.highlight }}
    >
        <div className={`${styles.btn_text}`}>
          {timeStamp.title}
        </div>
    </button>
  );
};
