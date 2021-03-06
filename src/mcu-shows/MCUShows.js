import './MCUShows.css'

const MCUShows = ({ dates, randomIndex }) => {
  const getAvenger = () => randomIndex();
  return (
    <div className='MCUShows'>
      <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
      <h2>Upcoming MCU Show Release Dates</h2>
      <p>WandaVision: {dates.wandaVision}</p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
      <p>Loki: {dates.loki}</p>
      <p>Hawkeye: {dates.hawkeye}</p>
      <button onClick={getAvenger}>RANDOM AVENGER</button>
    </div>
  );
}
export default MCUShows;