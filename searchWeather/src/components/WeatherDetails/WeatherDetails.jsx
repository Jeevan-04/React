import styles from './WeatherDetails.module.css';
import { useEffect, useState } from 'react';

export default function WeatherDetails({ city }) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef374978325e8ff38db840f71f5f2d09&units=metric`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.log("Error fetching weather data: " + error.message);
        });
    }
  }, [city]);

  return (
    <div className={styles.weatherDetails}>
      <h1>Weather Details</h1>

      {data && Object.keys(data).length > 0 ? (
        <div>
          <h2>Current Weather</h2>
          <p>Location: {data.name}</p>
          <p>Temperature: {data.main.temp} °C</p>
          <p>Weather: {data.weather[0].description}</p>
          {data.weather && data.weather.length > 0 && (
            <p>
              Icon:{' '}
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </p>
          )}
          <p>Humidity: {data.main.humidity} %</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}
