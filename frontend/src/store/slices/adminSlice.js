import { createSlice } from "@reduxjs/toolkit";
import { getStudents, getStudentById, getCourses, getTeachers, getTeacherById } from "../actions/adminActions";

const initialState = {
    students: [],
    courses: [],
    teachers: [],
    currentStudent: {},
    currentTeacher: {},
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
            })
            // Get Student By Id
            .addCase(getStudentById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getStudentById.fulfilled, (state, action) => {
                state.currentStudent = action.payload;
                state.status = "success";
            })
            .addCase(getStudentById.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
            // Get Courses
            .addCase(getCourses.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.courses = action.payload;
                state.status = "success";
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
            // Get Teachers
            .addCase(getTeachers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getTeachers.fulfilled, (state, action) => {
                state.teachers = action.payload;
                state.status = "success";
            })
            .addCase(getTeachers.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
            // Get Teacher By Id
            .addCase(getTeacherById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getTeacherById.fulfilled, (state, action) => {
                state.currentTeacher = action.payload;
                state.status = "success";
            })
            .addCase(getTeacherById.rejected, (state, action) => {
                state.error = action.payload;
                state.status = "failed";
            })
    }
});

export default adminSlice.reducer;