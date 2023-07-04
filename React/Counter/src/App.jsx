import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter + 1)
  }
  const handleclick = () => {
    setCounter(counter - 1)
  }
  return (

    <div>
      <h1>Counter :{counter} </h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleclick}>-</button>
    </div>
  )
}

export default App
