const API_KEY = "4f7840d3e144338e9fa84fd13995c3f8";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getCurrentWeather(city) {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
}
