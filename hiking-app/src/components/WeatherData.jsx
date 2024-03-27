import React, { useEffect, useState } from "react";

function WeatherData({ city }) {
  const apiKey = "436c0534ff8a64f66e7aa7d10c43b902"; // Moved apiKey inside component
  const country = 'NZ'; // Moved country inside component
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) setWeatherData(json);
        console.log(json);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });

    return () => {
      ignore = true;
    };
  }, [city]);
  

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {Math.floor((weatherData.main.temp)-273.15)} C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Main Weather Type: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherData;

