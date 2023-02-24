import { createSlice } from "@reduxjs/toolkit";
import { getProvinces, getCities } from "../actions/locationActions";

const initialState = {
    states: [],
    cities: [],
    status: "idle", // idle, loading, success, failed
    error: null,
};

export const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProvinces.pending, state => {
                state.status = "loading";
            })
            .addCase(getProvinces.fulfilled, (state, action) => {
                state.status = "success";
                state.states = action.payload;
            })
            .addCase(getProvinces.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(getCities.pending, state => {
                state.status = "loading";
            })
            .addCase(getCities.fulfilled, (state, action) => {
                state.status = "success";
                state.cities = action.payload;
            })
            .addCase(getCities.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default locationSlice.reducer;