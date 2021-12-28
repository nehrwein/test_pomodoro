import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useState } from 'react'

import pomosettings from './reducers/pomosettings'
import Timer from './pages/Timer'
import Settings from './pages/Settings'

const reducer = combineReducers({
  pomosettings: pomosettings.reducer
})

const store = configureStore({ reducer })

const App = () => {
  const [showSettings, setShowSettings] = useState(false)

  return (
    <Provider store={store}>
      <main>
        {showSettings? <Settings /> : <Timer />}  
      </main>
    </Provider>  
  )
}

export default App

