const API_KEY = "yourapi_key"; // Replace with your actual OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getCurrentWeather(city) {
  //fetch weather data based on the city name from the OpenWeatherMap API
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  // store the data in a variable and return it
  const data = await response.json();
  return data;
}
