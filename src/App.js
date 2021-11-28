// FINAL REACT EXERCISE

// 2a.
import MCUShows from "./mcu-shows/MCUShows";

// 5a.
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
}


function App() {
  return (
    <div>
      {/* 2b. */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c. and 5b.*/}
      <MCUShows dates={releaseDates}/>
    </div>
  );
}

export default App;