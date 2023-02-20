import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import localidadSlice from './slices/localidadSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        localidad: localidadSlice
    },
})