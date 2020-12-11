import React, { useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';


import _video from '../../data/groundSafetyTrainingVideo.mkv';
import styles from '../Player/playerStyles.module.scss';
import {ReactComponent as PlayIcon} from '../../assets/play-button.svg';
import Player from "../Player/Player";
import Context from "../context.js";
import Phases from "../Navigation/Phases/Phases";
import Events from "../Navigation/Events/Events"

//todo create function transforming normal time into secs
const phaseTimeStamps = [
  {
    title: 'On the ground',
    start: 27,
    end: 398
  },
  {
    title: 'In the bay',
    start: 399,
    end: 585
  },
  {
    title: 'Vehicles rules',
    start: 586,
    end: 923
  },
  {
    title: 'Loading an aircraft and preparing to flight',
    start: 924,
    end: 1187
  },
];
const eventTimeStamps = [
  {
    title: 'Placing safety cones',
    start: 490,
    highlight: '#349924'
  },
  {
    title: 'Lowing all the cargo locks',
    start: 352,
    highlight: '#349924'
  },
  {
    title: 'FOD check',
    start: 1080,
    highlight: '#993535'
  }
];
//todo валится если брать из стейта

const App = props => {

  const [state, setState] = useState({
    videoSrc: null,
    progress: '50%',
    // video: _video,
    // isMouseDown: false,
    // isPaused: true,
    phaseTimeStamps: null,
    eventTimeStamps: null,
    colors: null
  });
  const [colors, setColors] = useState(null);

  const { videoSrc, progress, isMouseDown } = state;

  const vidRef = useRef(videoSrc),
        video = vidRef.current;

  const progressRef = useRef();

  useEffect(() => {
    setState({
      videoSrc: _video,
      phaseTimeStamps,
      eventTimeStamps,
    });
    const colLength = phaseTimeStamps.length > eventTimeStamps.length ? phaseTimeStamps.length : eventTimeStamps.length;
    genColors(colLength);

    vidRef.current.addEventListener('timeupdate', handleProgress);
  }, []);

  function toggleVideo() {
    // const video = vidRef.current;
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    //todo make normally
    video.paused ? setState({ isPaused: false} ) : setState({ isPaused: true});
  }

  function jumpTo(timeStamp) {
    // const video = vidRef.current;
    const { start, end } = timeStamp;

    //todo change hardcode to "start" when scroll is finished
    video.currentTime = 125;
  }

  function handleProgress() {
    console.log('update');

    const percent = ( vidRef.current.currentTime /  vidRef.current.duration ) * 100;
    setState({ progress: `${percent}%`});
  }

  function scrub(e) {
    const scrubTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(state.colors)
  }

  function genColors(count) {
    const icolors = [];
    for (let i = 0; i < count; i++) {
      icolors.push(genRandomColor());
    }
    console.log(icolors);
    // return colors;
    setColors(icolors);
    console.log(colors)
    // setTimeout(() => console.log(colors), 3000)
  }

  function genRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  console.log(state);
  return (
      <Context.Provider value={{
        scrub,
        progress,
        progressRef,
        phaseTimeStamps: phaseTimeStamps,
        eventTimeStamps: phaseTimeStamps

      }}>
        <div className="container">

          <Player
              vidRef={vidRef}
              toggleVideo={toggleVideo}
          />

          {/*   NAVIGATION WRAPPER */}
          <div className={styles.navigation}>

            <Phases jumpTo={jumpTo}
                    phaseTimeStamps={phaseTimeStamps}
            />

            <Events jumpTo={jumpTo}
                    eventTimeStamps={eventTimeStamps}
            />

          </div>
        </div>
      </Context.Provider>
  );
};

App.propTypes = {
  //todo
};

export default App;