import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false); // Correct initialization

  const APT_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8e682a98c752f3a3a892c751225ee7aa";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${APT_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    setError(false); // Reset error before making the API call

    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear input on success
    } catch (err) {
      setError(true); // Display error message
    }
  };

  return (
    <div>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="City Name"></label>
        <input
          placeholder="City Name"
          type="text"
          id="City Name"
          name="City Name"
          value={city}
          onChange={handleChange}
        />
        
        <button>Search</button>
        {error && <p>No such place exists!</p>}
      </form>
    </div>
  );
}

export default SearchBox;
