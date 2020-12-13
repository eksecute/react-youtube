import React, {useState, useRef, useEffect} from 'react';
import Context from "../context.js";
import Player from "../Player/Player";
import Navigation from "../Navigation/Navigation";

const phaseTimeStamps = [
  {
    title: 'On the ground',
    start: 27,
    end: 399
  },
  {
    title: 'In the bay',
    start: 399,
    end: 586
  },
  {
    title: 'Vehicles rules',
    start: 586,
    end: 924
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
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
    start: 490,
    highlight: '#349924'
  },
  {
    title: 'Lowing all the cargo locks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    start: 355,
    highlight: '#349924'
  },
  {
    title: 'FOD check',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    start: 1080,
    highlight: '#993535'
  }
];

export default function App() {
  const [state, setState] = useState({
    phaseTimeStamps: null,
    eventTimeStamps: null,
  });
  const [progress, setProgress] = useState('0%');

  const phaseColors = useRef([]);
  const vidRef = useRef(),
        video = vidRef.current;
  const progressRef = useRef();

  useEffect(() => {
    setState({
      phaseTimeStamps,
      eventTimeStamps,
    });
    phaseColors.current = genColors();
    vidRef.current.addEventListener('timeupdate', handleProgress);
  }, []);

  const toggleVideo = () => {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }
  const jumpTo = ({ start }) => {
    video.currentTime = start;
  }
  const handleProgress = () => {
    const percent = ( vidRef.current.currentTime / vidRef.current.duration ) * 100;
    setProgress(`${percent}%`);
    // console.log(12)
  }
  const scrub = (e) => {
    const scrubTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * video.duration;
    const percent = (scrubTime / vidRef.current.duration) * 100;

    setProgress(`${percent}`);
    if (!isNaN(scrubTime)) {
      video.currentTime = scrubTime;
    }
  }
  const genColors = () => {
    const colLength = phaseTimeStamps.length > eventTimeStamps.length ? phaseTimeStamps.length : eventTimeStamps.length;
    const iColors = [];
    for (let i = 0; i < colLength; i++) {
      iColors.push(genRandomColor())
    }
    return iColors;
  }
  const genRandomColor = () => {
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
    return "hsl(" + 360 * Math.random() + ',' +
        (45 + 90 * Math.random()) + '%,' +
        (74 + 20 * Math.random()) + '%)'
  }

  return (
    <Context.Provider value={{
      jumpTo,
      scrub,
      video: vidRef.current,
      progress,
      setProgress,
      progressRef,
      phaseTimeStamps: state.phaseTimeStamps,
      eventTimeStamps: state.eventTimeStamps,
      phaseColors: phaseColors.current
    }}>
      <div className="container">

        <Player
            vidRef={ vidRef }
            toggleVideo={ toggleVideo }
        />
        { video
            ? <Navigation/>
            : null
        }
      </div>
    </Context.Provider>
  );
}