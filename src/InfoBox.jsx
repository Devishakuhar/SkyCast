import React from "react";
import "./InfoBox.css"; // Import CSS for styling
import { FaCloudMoonRain } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { MdSevereCold } from "react-icons/md";
function InfoBox({ info }) {

  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://unsplash.com/photos/white-and-brown-plant-during-daytime-atJncOD6ZFg"; 
  const RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

  return (
    <div className="info-box">
      <h1 className="info-title">Weather Information</h1>
      <div className="card">
       {/* Add the image at the top of the card */}
    <img src={info.humidity > 70 
             ? RAIN_URL 
             : info.temp > 15
             ? HOT_URL
             : COLD_URL
            } 
       alt="weather-icon" 
       className="weather-icon" 
       />
        <section className="cityName">
        {info.city} {info.humidity > 70 
             ?  <FaCloudMoonRain />
             : info.temp > 15
             ? <IoSunny />
             : <MdSevereCold />
            } 
        </section>
        <div className="card-details">
          <p>
            <strong>Temperature:</strong> {info.temp}°C
          </p>
          <p>
            <strong>Min Temp:</strong> {info.tempMin}°C
          </p>
          <p>
            <strong>Max Temp:</strong> {info.tempMax}°C
          </p>
          <p>
            <strong>Humidity:</strong> {info.humidity}%
          </p>
          <p>
            The weather can be described as <strong><i>{info.weather}</i></strong> and feels like {info.feelsLike}°C
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
