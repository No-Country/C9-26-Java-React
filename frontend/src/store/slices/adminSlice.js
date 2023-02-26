import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students: [],
    courses: [],
    teachers: [],
    status: "idle",
    error: null,
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Get Students
            .addCase(getStudents.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getStudents.fulfilled, (state, action) => {
                state.students = action.payload;
                state.status = "success";
            })
            .addCase(getStudents.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            });
    }
});
