import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../api";
import { useAuth } from "../../hooks/userHooks";

// get all students
export const getStudents = createAsyncThunk(
    "admin/getStudents",
    async ({ rejectWithValue }) => {
        const { token } = useAuth()
        try {
            const response = await apiCall.get("/students/admin/all", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// get student by id
export const getStudentById = createAsyncThunk(
    "admin/getStudentById",
    async (id, { rejectWithValue }) => {
        try {
            const { token } = useAuth()
            const response = await apiCall.get(`/students/admin/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// get all courses
export const getCourses = createAsyncThunk(
    "admin/getCourses",
    async ({ rejectWithValue }) => {
        try {
            const { token } = useAuth()
            const response = await apiCall.get("/courses/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }

    }
)

// get all teachers
export const getTeachers = createAsyncThunk(
    "admin/getTeachers",
    async ({ rejectWithValue }) => {
        try {
            const { token } = useAuth()
            const response = await apiCall.get("/teachers/all", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// get teacher by id
export const getTeacherById = createAsyncThunk(
    "admin/getTeacherById",
    async (id, { rejectWithValue }) => {
        try {
            const { token } = useAuth()
            const response = await apiCall.get(`/teachers/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)