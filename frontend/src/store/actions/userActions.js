import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../api';

export const login = createAsyncThunk(
    'user/login',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const response = await apiCall.post('/auth/login', data);

            const { token, role, studentId } = response.data;

            localStorage.setItem('token', JSON.stringify(token));

            dispatch(studentInfo(token));

            return { token, role, studentId };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const studentInfo = createAsyncThunk(
    'user/studentInfo',
    async (token, { rejectWithValue }) => {
        try {

            const response = await apiCall.get('/students/token/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log(response.data);

            return response.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);