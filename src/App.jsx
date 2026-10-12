import "./style.css";
import WeatherCard from "./components/WeatherCard";
function App() {
  return (
    <div>
      <h1 className="header">Todays Weather</h1>
      <WeatherCard />
    </div>
  );
}

export default App;
