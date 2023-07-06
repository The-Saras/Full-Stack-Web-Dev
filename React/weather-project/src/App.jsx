import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [weatherData, SetWeatherData] = useState({})
  const [location, Setlocation] = useState("Delhi")

  const fetchdata = async () => {
    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0bda3ea80b8fe197b940b2a1ee41dd77&units=metric`)
      const jsonData = await data.json();
      const icon = jsonData.weather[0].icon;
      const imgurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      SetWeatherData(jsonData);

    }
    catch (error) {
      console.error(error)
    }
  }
  const handleChange = (e) => {
    Setlocation(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchdata();
  }


  return (
    <>
      <div className='container'>

        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          Enter City Name<input name='city' onChange={handleChange}></input>
          <br></br>
          <button type="submit">Get Weather</button>
        </form>
        {Object.keys(weatherData).length !== 0 ? (
          <>
            <h2>Temperature:{weatherData.main.temp}</h2>
            <h2>Description:{weatherData.weather[0].main}</h2>
            <h2>Wind speed:{weatherData.wind.speed}</h2>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  )
}

export default App
