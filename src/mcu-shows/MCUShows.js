// FINAL REACT EXERCISE

// 1a.
import './MCUShows.css';

// 1b. and 5c.
function MCUShows({dates}){
    // 1c.
    return (
        <div className='MCUShows'>
            {/* 3a. */}
            <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            {/* 5c. */}
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            <button>RANDOM MCU CHARACTER</button>
        </div>
    );
}

// 1d.
export default MCUShows;
// 6f. Have a random MCU character name display in the new h1 element after "Random MCU Character: " whenever the RANDOM MCU CHARACTER button is clicked.