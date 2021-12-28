import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactSlider from 'react-slider'
import BackButton from '../components/BackButton'
import pomosettings from '../reducers/pomosettings'
import './Slider.css'


const Settings = () => {
  const workMinutes = useSelector((state) => state.pomosettings.workMinutes)
  const breakMinutes = useSelector((state) => state.pomosettings.breakMinutes)
  const dispatch = useDispatch()

  return (
    <div style={{textAlign:'left'}}>
      <label>work: {workMinutes}:00</label>
        <ReactSlider
          className='slider'
          thumbClassName='thumb'
          trackClassName='track'
          value={workMinutes}
          onChange={newValue => dispatch(pomosettings.actions.setWorkMinutes(newValue))}
          min={0}
          max={120}
        />
      <label>break: {breakMinutes}:00</label>
        <ReactSlider
          className='slider green'
          thumbClassName='thumb'
          trackClassName='track'
          value={breakMinutes}
          onChange={newValue => dispatch(pomosettings.actions.setBreakMinutes(newValue))}
          min={0}
          max={60}
        />
      <div style={{textAlign: 'center', marginTop: '28px'}}>
       <BackButton onClick={() => dispatch(pomosettings.actions.setShowSettings())}/>          
      </div>  
    </div>
  )
}

export default Settings
