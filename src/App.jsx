import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './Meals/Meals'
import Header from './Header/Header'

function App() {

  const [name, setName] = useState([])

  const btnClick = (newName) => {
    const previousName = [...name, newName]
    setName(previousName)
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="flex">
        <div className='w-4/5'>
          <Meals btnClick = {btnClick}></Meals>

        </div>
        <div className='w-1/5 bg-indigo-700 h-96 sticky top-0'>
          {
            name.map(nm => <h1 className='m-7 text-xl font-bold'>{index + 1}. Name: {nm}</h1>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
