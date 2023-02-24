import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../api';

export const login = createAsyncThunk(
    'user/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await apiCall.post('/auth/login', data);
            console.log(response.data);
            const token = response.data.token;
            const role = response.data.role
            return ({
                token,
                role
            });
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.response.data);
        }
    }
);