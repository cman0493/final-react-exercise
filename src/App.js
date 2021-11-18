import { useState } from 'react'
import MCUShows from './mcu-shows/MCUShows'

const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'May 2021',
  hawkeye: 'Fall of  2021'
 };

 const avengers = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Hawkeye'
 ];

function App() {
  const [index, setIndex] = useState(0);
  const randomIndex = () => {
    const newIndex =  Math.floor(Math.random() * 5);
    setIndex(newIndex);
  }

  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates={releaseDates} randomIndex={randomIndex} />
      <h1>{avengers[index]}</h1>
    </div>
  );
}

export default App;