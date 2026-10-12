import { useEffect, useState } from "react";
import "../css/weather-card.css";
import { getCurrentWeather } from "../services/api";

function WeatherCard() {
  //store current city in state
  const [city, setCity] = useState("Tamale");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    //when city value is changed fecth weather data based on the chnaged city value
    getCurrentWeather(city).then((data) => {
      //set //#endregion
      setWeather(data);
      console.log(data);
    });
  }, [city]);
  //get the weather information from the weather object
  const info = weather?.weather[0];
  //get the main weather information from the weather object
  const instance = info?.main;
  //get the wind speed information from the weather object
  const windSpeed = weather?.wind?.speed;
  return (
    <>
      {" "}
      <div className="container">
        <div className="weather-card">
          <div className="weather-info">
            {instance ? instance : "Loading..."}
          </div>
          <div className="weather-icon">
            {/* Display appropriate weather icon based on the weather conditions */}
            {instance === "Clear"
              ? "☀"
              : instance === "Clouds"
                ? "☁"
                : instance === "Rain"
                  ? "🌧"
                  : "❓"}
          </div>
          <div className="wind-speed">
            Wind Speed: {windSpeed ? `${windSpeed} m/s` : "Loading..."}
          </div>
          <div className="city-name">Location:{city}</div>
        </div>
        <input type="text" id="cityInput" placeholder="Enter city name" />
        <button
          onClick={() => {
            //get the value of the city input field
            const cityInput = document.getElementById("cityInput").value;
            //if the city input is invalid alert user
            if (cityInput.trim() === "" || cityInput.trim().length <= 1) {
              alert("Please enter a valid city");
            } else {
              //set the city state to the value of the city input field
              setCity(cityInput);
            }
          }}
        >
          Check Weather
        </button>
      </div>
    </>
  );
}

export default WeatherCard;
