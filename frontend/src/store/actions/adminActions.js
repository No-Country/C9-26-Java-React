import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../api";
import { useSelector } from "react-redux";

export const getStudents = createAsyncThunk(
    "admin/getStudents",
    async ({ rejectWithValue }) => {
        const token = useSelector((state) => state.user.token);
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