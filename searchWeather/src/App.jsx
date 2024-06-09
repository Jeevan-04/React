import './App.css';
import { useState } from 'react';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App() {
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const handleSearch = () => {
    setSearchCity(city);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchCity && <WeatherDetails city={searchCity} />}
    </div>
  );
}

export default App;
