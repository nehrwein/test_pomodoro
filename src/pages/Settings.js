import React from 'react'
import { useSelector } from 'react-redux'
import ReactSlider from 'react-slider'
import './Slider.css'


const Settings = () => {
  const workMinutes = useSelector((state) => state.pomosettings.workMinutes)
  const breakMinutes = useSelector((state) => state.pomosettings.breakMinutes)

  return (
    <div style={{textAlign:'left'}}>
      <label>work minutes: {workMinutes}</label>
        <ReactSlider
          className='slider'
          thumbClassName='thumb'
          trackClassName='track'
          value={workMinutes}
          min={1}
          max={120}
        />
      <label>break minutes: {breakMinutes}</label>
        <ReactSlider
          className='slider green'
          thumbClassName='thumb'
          trackClassName='track'
          value={breakMinutes}
          min={1}
          max={120}
        />
    </div>
  )
}

export default Settings
