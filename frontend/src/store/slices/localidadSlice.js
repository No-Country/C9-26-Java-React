import { createSlice } from '@reduxjs/toolkit'
import {getLocalidad, getProvincias} from "../actions/localidadActions";

const initialState = {
    localidades: [],
    provincias: [],
    status: "idle", 
    error: ""
}

export const localidadSlice = createSlice({
    name: 'localidad',
    initialState,
    reducers: {
    },
    extraReducer: 
        builder => {
            builder
                .addCase(getLocalidad.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(getLocalidad.fulfilled, (state, action) => {
                    state.localidades = action.payload
                    state.status = 'success'
                })
                .addCase(getLocalidad.rejected, (state, action) => {
                    state.error = action.payload
                    state.status = 'failed'
                })
                .addCase(getProvincias.pending, (state, action) => {
                    state.status = 'loading'
                })
                .addCase(getProvincias.fulfilled, (state, action) => {
                    state.provincias = action.payload
                    state.status = 'success'
                })
                .addCase(getProvincias.rejected, (state, action) => {
                    state.error = action.payload
                    state.status = 'failed'
                })
        }
})

export default localidadSlice.reducer