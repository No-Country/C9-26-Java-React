import { createSlice } from '@reduxjs/toolkit'
import { login, studentInfo, setSession } from '../actions/userActions'

const initialState = {
    info: {},
    role: null,
    token: null,
    role: null,
    status: 'idle', // idle, loading, success, failed
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.info = {}
            state.token = null
            state.role = null
            state.status = 'idle'
            state.error = null
            localStorage.removeItem('nc_be_session')
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token
                state.role = action.payload.role
                state.status = 'success'
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'failed'
            })
            // Student Info
            .addCase(studentInfo.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(studentInfo.fulfilled, (state, action) => {
                state.info = action.payload
                state.status = 'success'
            })
            .addCase(studentInfo.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'failed'
            })
            // Set Session (from localStorage)
            .addCase(setSession.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(setSession.fulfilled, (state, action) => {
                state.token = action.payload.token
                state.role = action.payload.role
                state.status = 'success'
            })
            .addCase(setSession.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'failed'
            })
    }
})

export const { logout, setToken } = userSlice.actions

export const selectUser = (state) => state.user.info
export const selectToken = (state) => state.user.token
export const selectStatus = (state) => state.user.status
export const selectError = (state) => state.user.error

export default userSlice.reducer


