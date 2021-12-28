import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from '../components/PauseButton';
import PlayButton from '../components/PlayButton';
import SettingsButton from '../components/SettingsButton';

const red = '#f54e4e'
const green = '#4aec8c'

const Timer = () => {
  return (
    <div>
      <CircularProgressbar 
        value={60} 
        text={`${60}%`} 
        styles={buildStyles({
          textColor: '#fff',
          pathColor: red,
          trailColor: 'rgba(255,255,255, 0.8)'
        })} />
      <div style={{marginTop:'20px'}}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{marginTop:'20px'}}>
        <SettingsButton />
      </div>  
    </div>    
  )
}

export default Timer
