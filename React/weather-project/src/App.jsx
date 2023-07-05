import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [weatherData, SetWeatherData] = useState({})
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Nashik&appid=0bda3ea80b8fe197b940b2a1ee41dd77&units=metric")
        const jsonData = await data.json();
        SetWeatherData(jsonData);
        console.log(jsonData)
        console.log(data)
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchdata();
  }, [])


  return (
    <>
      <h1>Weather App</h1>

    </>
  )
}

export default App
