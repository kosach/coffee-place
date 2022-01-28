import { configureStore } from '@reduxjs/toolkit';
import coffeePlace from './set-coffee-place-form/coffee-place.slice'
import competitors from './search-competitor-btn/competitor.slice';

export default configureStore({
  reducer: {
    coffeePlace,
    competitors
  },
})
