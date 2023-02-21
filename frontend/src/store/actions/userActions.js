import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../api';

export const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await apiCall.post('/auth/login', data);
            console.log(response.data.token);
            const token = response.data.token;
            return token;
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.response.data);
        }
    }
);