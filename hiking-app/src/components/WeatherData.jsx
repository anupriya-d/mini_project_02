import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';

const cities = [
  { name: "Dunedin", country: "NZ" },
  { name: "Queenstown", country: "NZ" },
  { name: "Wanaka", country: "NZ" }
];

function WeatherData() {
  let ignore = false;
  const apiKey = "436c0534ff8a64f66e7aa7d10c43b902"; 
  const [city, setCity] = useState(cities[0]);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${apiKey}`
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
  }, [city, apiKey]);

  const options = cities.map((c) => (
    <option value={c.name} key={c.name}>
      {c.name}
    </option>
  ));

  const Temp = weatherData ? (Math.floor(weatherData.main.temp - 273.15)) : 'N/A';

  return (
    <div className="WeatherData componentBox">
      <Typography variant="h4" gutterBottom>
        City Weather
      </Typography>
      <label className="lbl-curr">
        Choose city:
        <select
          className="select-curr"
          value={city.name}
          onChange={(e) => {
            const selectedCity = cities.find(c => c.name === e.target.value);
            setCity(selectedCity);
          }}
        >
          {options}
        </select>
      </label>
      <div>
        {weatherData && (
          <>
            <p className="r-result">Temperature: {Temp}°C</p>
            <p className="r-result">Humidity: {weatherData.main.humidity}%</p>
            <p className="r-result">Main Weather Type: {weatherData.weather[0].main}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherData;
