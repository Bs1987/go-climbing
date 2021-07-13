import React, { useState } from "react";
import "./ClimbingWeather.css";
import axios from "axios";
import SearchButton from "../../Components/SearchButton/SearchButton";


function WeatherPage(props) {
  const [weatherData, setWeatherData] = useState(null);

  async function fetchGroningen() {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=groningen,nl&appid=${process.env.REACT_APP_API_KEY}&lang=en&units=metric`
      );
      console.log(result.data);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }
  async function fetchMaastricht() {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Maastricht,nl&appid=${apiKey}&lang=en&units=metric`
      );
      console.log(result.data);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }
  async function fetchAmsterdam() {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&appid=${apiKey}&lang=en&units=metric`
      );
      console.log(result.data);
      setWeatherData(result.data);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <div className="weather-container">
        <div className="weather-header">
          <h2>WeatherPage</h2>
          <span>
            <h1>Weather description:</h1>
            <h2>{weatherData.weather[0].description}</h2>
            <h1>Location:</h1>
            <h2>{weatherData.name}</h2>
            <h1>Humidity:</h1>
            <h2>{weatherData.main.humidity}</h2>
            <h1>Temperature</h1>
            <h2>{weatherData.main.temp}</h2>
          </span>
          <button type="button" onClick={fetchGroningen}>
            Click here to find the perfect climbing weather!
          </button>
          <button type="button" onClick={fetchMaastricht}>
            Click here to find the perfect climbing weather!
          </button>
          <button type="button" onClick={fetchAmsterdam}>
            Click here to find the perfect climbing weather!
          </button>
          <SearchButton />
        </div>
      </div>
    </>
  );
}

export default WeatherPage;
