import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Calendar from './components/Calendar/Calendar'
import Card from './components/Card/Card'
import Column from './components/Column/Column'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopUser from './components/PopUser/PopUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Header />
      <Main />
      <Calendar />
      <PopBrowse />
      <PopUser />
      <PopNewCard />
      <Column />
      <Card />
      
    </div>
    </>
  )
}

export default App
