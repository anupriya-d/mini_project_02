import React, { useState, useEffect } from "react";
import WeatherData from "../components/WeatherData";

function FetchWeather() {
  const [cityIndex, setCityIndex] = useState(0);
  const cities = ["Queenstown", "Cromwell", "Alexandra", "Wanaka"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3 * 60 * 1000); // 3 minutes interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <WeatherData city={cities[cityIndex]} />
    </div>
  );
}

export default FetchWeather;
