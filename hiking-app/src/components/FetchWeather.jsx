import React, { useState, useEffect } from "react";
import WeatherData from "../components/WeatherData";

function FetchWeather() {
  const [cityIndex, setCityIndex] = useState(0);
  const cities = ["Dunedin", "Cromwell", "Alexandra", "Wanaka"];

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment cityIndex cyclically
      setCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3 * 60 * 1000); // 3 minutes interval

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div>

      <WeatherData city={cities[cityIndex]} />
    </div>
  );
}

export default FetchWeather;