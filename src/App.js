import React from 'react'
import CrypoCoinsDetalis from './components/CrypoCoinsDetalis'
import './App.css'
import Navbar from './components/Navbar'


const App = () => {



  return (
    <div className='coin-app'>
      <Navbar />
      <CrypoCoinsDetalis />
    </div>
  )
}

export default App