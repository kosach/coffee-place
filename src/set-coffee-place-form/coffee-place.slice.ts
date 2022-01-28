import { createSlice } from '@reduxjs/toolkit'
import { type } from 'os';

type Coordinates = {
  lat: number,
  lng: number
}

export const coffeePlaceSlice = createSlice({
  name: 'coffeePlace',
  initialState: {
    value: {lat: 49.816152382127115, lng: 24.001515554958253},
  },
  reducers: {
    setCoordinates: (state, action) => {
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCoordinates } = coffeePlaceSlice.actions

export default coffeePlaceSlice.reducer
