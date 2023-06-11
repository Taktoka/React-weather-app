import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import WeatherData from "./components/WeatherData/WeatherData";

function App() {
  const API_Key = "dc4d664d20ff42ab30677afe451ae515";

  const [data, setData] = useState({
    temprature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  });

  const getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.city.value;
    let country = e.target.country.value;
    let api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_Key}`
    );
    let data = await api.json();
    console.log(data);

    if (city && country) {
      setData({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      setData({
        error: "Please enter city",
      });
    }
  };

  return (
    <div className="App">
      <Form getWeather={getWeather} />
      <WeatherData data={data} />
    </div>
  );
}

export default App;
