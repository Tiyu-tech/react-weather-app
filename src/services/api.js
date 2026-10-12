const API_KEY = "yourapi_key"; // Replace with your actual OpenWeatherMap API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getCurrentWeather(city) {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
}
