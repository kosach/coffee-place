import { createSlice } from "@reduxjs/toolkit";

export const competitorsSlice = createSlice({
  name: 'map',
  initialState: {
    markers: {},
  },
  reducers: {
    setMarker: (state, action) => {
      state.markers = action.payload;
    }
  }
})

export const { setMarker } = competitorsSlice.actions;
export default competitorsSlice.reducer;
