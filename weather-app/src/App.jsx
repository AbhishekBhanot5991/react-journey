import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=b92daef101eb6f1c034695414ab4ca2a'
    axios.get(apiUrl)    
    .then((response) => {
      setWeather(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <>
      <div>
      <h1>Weather App</h1>
      {weather && (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      {/* <button onClick={getWeather}>Get Weather</button> */}
      
    </div>
    </>
  )
}

export default App
