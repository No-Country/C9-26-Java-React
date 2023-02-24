import { createSlice } from '@reduxjs/toolkit'
import { login, studentInfo } from '../actions/userActions'

const initialState = {
    info: null,
    role: null,
    studentId: null,
    token: null,
    role: null,
    status: 'idle', // idle, loading, success, failed
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => { // from local storage
            state.token = action.payload
        },
        logout: (state) => {
            state.info = null
            state.token = null
            state.role = null
            state.status = 'idle'
            state.error = null
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload.token
                state.role = action.payload.role

                state.studentId = action.payload.studentId
                state.status = 'success'
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload
                state.status = 'failed'
            })
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
    }
})

export const { logout, setToken } = userSlice.actions

export const selectUser = (state) => state.user.info
export const selectToken = (state) => state.user.token
export const selectStatus = (state) => state.user.status
export const selectError = (state) => state.user.error

export default userSlice.reducer


