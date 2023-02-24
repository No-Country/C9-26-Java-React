import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import locationSlice from './slices/locationSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        location: locationSlice,
    },
})