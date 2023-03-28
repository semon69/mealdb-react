import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './Meals/Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex">
      <div className='w-4/5'>
        <Meals></Meals>

      </div>
      <div  className='w-1/5 bg-red-600'>
        <h1 className=' bg-red-600'>emon</h1>
      </div>
    </div>
  )
}

export default App
