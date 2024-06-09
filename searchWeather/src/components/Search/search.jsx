import { useState } from 'react';
import styles from './search.module.css';

export default function Search() {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      history.push(`/weather/${city}`);
    }
  };

  return (
    <div className={styles.search}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
