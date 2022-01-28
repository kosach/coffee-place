import { createSlice } from "@reduxjs/toolkit";

export const competitorsSlice = createSlice({
  name: 'competitors',
  initialState: {
    list: [],
  },
  reducers: {
    setCompetitors: (state, action) => {
      state.list = action.payload;
    }
  }
})

export const { setCompetitors } = competitorsSlice.actions;
export default competitorsSlice.reducer;
