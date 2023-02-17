import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../api';

export const login = createAsyncThunk(
    'user/login',
    async (data, { RejectWithValue }) => {
        try {
            const response = await apiCall.post('/auth/login', data);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return RejectWithValue(error.response.data);
        }
    }
);