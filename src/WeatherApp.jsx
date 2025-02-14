import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./App.css";
export default function WeatherApp(){
     const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax: 25.05,
        humidity:47,
        weather:"haze"
     });
     let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
     };

// Set background class based on weather
let backgroundClass = "";
if (weatherInfo.humidity > 70) {
  backgroundClass = "rainy-background";
} else if (weatherInfo.temp > 15) {
  backgroundClass = "sunny-background";
} else {
  backgroundClass = "cold-background"; // Optional for cold background
}

return(
    <div className={`weather-app ${backgroundClass}`}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
);
}