import React from "react";
import "./weatherdata.css";

function WeatherData(props) {
  const { data } = props;

  return (
    <div className="info">
      {data.temp && (
        <p>
          Temp: <span> {data.temp}</span>
        </p>
      )}
      {data.city && (
        <p>
          City:<span> {data.city}</span>
        </p>
      )}
      {data.country && (
        <p>
          Country: <span> {data.country}</span>
        </p>
      )}
      {data.humidity && (
        <p>
          Humidity: <span> {data.humidity}</span>
        </p>
      )}
      {data.description && (
        <p>
          Description:<span> {data.description}</span>
        </p>
      )}
      {data.error && (
        <p>
          Error:<span> {data.error}</span>
        </p>
      )}
    </div>
  );
}
export default WeatherData;
