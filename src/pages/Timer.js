import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PauseButton from '../components/PauseButton';
import PlayButton from '../components/PlayButton';
import SettingsButton from '../components/SettingsButton';
import pomosettings from '../reducers/pomosettings';

const red = '#f54e4e'
const green = '#4aec8c'

const Timer = () => {
  const dispatch = useDispatch()
  const settingsInfo = useSelector(state => state.pomosettings)

  //Timer is paused to start with
  const [isPaused, setIsPaused] = useState(true)
  // mode can be work/break/null
  const [mode, setMode] = useState('work') 
  const [secondsLeft, setSecondsLeft] = useState(0)

  //references are needed to work with setInterval
  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  const initTimer = () => {
    secondsLeftRef.current = settingsInfo.workMinutes * 60
    setSecondsLeft(secondsLeftRef.current)
  }




  useEffect(() => {
    initTimer()
  
    const switchMode = () => {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work'
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60
      
      setMode(nextMode)
      modeRef.current = nextMode
  
      setSecondsLeft(nextSeconds)
      secondsLeftRef.current = nextSeconds
    }

    const interval = setInterval(() => {
      //you have to use references inside the intervall. Otherwise React uses always the initial state value even after it is refreshed
      if (isPausedRef.current) {
        return
      }
      if (secondsLeftRef.current === 0){
        return switchMode()
      }

      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [settingsInfo])

  const totalSeconds = mode === 'work' 
    ? settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60
  const percentage = Math.round(secondsLeft / totalSeconds * 100) 

  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return (
    <div>
      <CircularProgressbar 
        value={percentage} 
        text={minutes + ':' + seconds} 
        styles={buildStyles({
          textColor: '#fff',
          pathColor: red,
          trailColor: 'rgba(255,255,255, 0.8)'
        })} />
      <div style={{marginTop:'20px'}}>
        {isPaused? <PlayButton /> : <PauseButton />}
      </div>
      <div style={{marginTop:'20px'}}>
        <SettingsButton onClick={() => dispatch(pomosettings.actions.setShowSettings())}/>
      </div>  
    </div>    
  )
}

export default Timer
