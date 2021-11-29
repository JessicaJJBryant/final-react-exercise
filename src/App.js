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
}

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
  let randomIndex = () => setIndex(index * Math.floor(Math.random()+1));
  return (
    <div>
      {/* 2b. */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c. and 5b.*/}
      <MCUShows dates={releaseDates}/>
      {/* 6d. */}
      <h1>Random MCU Character:</h1>
    </div>
  );
}

export default App;

// 7a. In the App function component, use another useState function below the first one and set the starting state value to 0 (Zero) on this one as well. Also, use destructuring to set the values in the array that is returned from the useState function to the following variable names…

// const [num, setNum]

// 7b. Below the Random MCU Character h1 in the App.js file create another h1 element with the following content inside: "Next MCU Character:"

// 7c. In the MCUShows component create another button below the "RANDOM MCU CHARACTER" button. Set the content/text for the button to the following text: "NEXT MCU CHARACTER".

// 7d. Have an MCU Character name display in the new h1 element after "Next MCU Character: " whenever the NEXT MCU CHARACTER button is clicked. Have this set up so that it will start with "Scarlet Witch" when the page loads and every time the NEXT MCU CHARACTER button is clicked have it display whichever MCU Character name comes next in the "mcuCharacters" array. Also, whenever it gets to "Hawkeye", who is the last name in the array, have it start back at "Scarlet Witch" when the button is pressed again.

// 8a. Use the useEffect Hook/Function so that the message "The Next MCU Character has been displayed" displays in an alert when the page loads and also when the "NEXT MCU CHARACTER" button is pressed, but NOT when the "RANDOM MCU CHARACTER" button is pressed. (NOTE: We have not covered this so you will need to look up how the useEffect Hook/Function works.) (HINT: You need to import the useEffect function/hook like you do for useState.)