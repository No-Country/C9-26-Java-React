import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiCall } from '../../api';

export const login = createAsyncThunk(
    'user/login',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const response = await apiCall.post('/auth/login', data);

            const { token, role } = response.data;

            localStorage.setItem('nc_be_session', JSON.stringify({ role, token }));

            dispatch(studentInfo(token));

            return { token, role };
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

            const info = response.data;

            return info;

        } catch (error) {
            if (error.response.status === 403) {
                localStorage.removeItem('nc_be_session');
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const setSession = createAsyncThunk(
    'user/setSession',
    async (session, { dispatch, rejectWithValue }) => {
        try {
            const { token } = session

            dispatch(studentInfo(token))

            return session;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)