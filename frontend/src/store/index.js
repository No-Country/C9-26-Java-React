import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import locationSlice from './slices/locationSlice'
import adminSlice from './slices/adminSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        location: locationSlice,
        admin: adminSlice,
    },
})