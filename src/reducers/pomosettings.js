import { createSlice } from "@reduxjs/toolkit";

const pomosettings = createSlice({
  name: 'pomosettings',
  initialState: {
    workMinutes : 25,
    breakMinutes: 5,
    showSettings: false,
  },
  reducers: {
    setWorkMinutes: (state, action) => {
      state.workMinutes = action.payload
    },
    setBreakMinutes: (state, action) => {
      state.breakMinutes = action.payload
    },
    setShowSettings: (state) => {
      state.showSettings = !state.showSettings
    }
  }
})

export default pomosettings