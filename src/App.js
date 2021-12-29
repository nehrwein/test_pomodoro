import React from 'react'
import './App.css'
import { useSelector } from 'react-redux' 

import Timer from './pages/Timer'
import Settings from './pages/Settings'


//the Provider is applied in index.js, so that I can use showSettings in App.js
const App = () => {
  const showSettings = useSelector((state) => state.pomosettings.showSettings)

  return (
    <main>
      {showSettings? <Settings /> : <Timer />}  
    </main>
  )
}

export default App

