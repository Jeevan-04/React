import React, { useEffect, useState } from "react";

export default function WeatherDetails() {
  const [data, setData] = useState({});
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  useEffect(() => {
    if (position.latitude && position.longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=ef374978325e8ff38db840f71f5f2d09&units=metric`)
        .then((response) => {return response.json()})
        .then((result) => { setData(result)})
        .catch((error) => { console.log("Error fetching weather data: " + error.message)});
    }
  }, [position]);

  return (
        <>
          <h1>Weather Details</h1>


          {data && Object.keys(data).length > 0 ? (
            <div>
              <h2>Current Weather</h2>
              <p>Location: {data.name}</p>
              <p>Temperature: {data.main.temp} °C</p>
              <p>Weather: {data.weather[0].description}</p>
              <p>Weather: {data.weather && data.weather.length > 0 && data.weather[0].description}</p>
              {data.weather && data.weather.length > 0 && (
                <p>Icon: <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather Icon" /></p>
              )}
              <p>Humidity: {data.main.humidity} %</p>
              <p>Wind Speed: {data.wind.speed} m/s</p>
            </div>
          ) : (
            <p>No weather data available</p>
          )}
        </>
  );
}
