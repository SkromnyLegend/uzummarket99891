import { configureStore } from '@reduxjs/toolkit'
import like from './like'
import cartSlice from './cartSlice'
export const store = configureStore({
  reducer: {
    like,
    cart: cartSlice
  },
})
