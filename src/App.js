// FINAL REACT EXERCISE

// 2a.
import MCUShows from "./mcu-shows/MCUShows";

// Bonus 6a.
import {useState} from 'react';

// 5a.
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};

// Bonus 6b.
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
];


function App() {
  // 6c.
  const [index, setIndex] = useState(0);

  // Bonus 7a.
  const [num, setNum] =useState(0);

  // BONUS 6f.
  function newIndex(){
    const randomIndex = Math.floor(Math.random() * mcuCharacters.length);
    setIndex(randomIndex);
  }
  // let randomIndex = () => setIndex(index * Math.floor(Math.random()+1));

  // BONUS 7d.
  function newNum(){
    if (num < mcuCharacters.length - 1){
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }
  return (
    <div>
      {/* 2b. */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c., 5b., BONUS 6f., and BONUS 7d.*/}
      <MCUShows dates={releaseDates} indexTwo={newIndex} numTwo={newNum}/>
      {/* 6d. and 6f. */}
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      {/* 7b. and 7d. */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
