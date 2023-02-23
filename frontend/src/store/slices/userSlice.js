import { createSlice } from '@reduxjs/toolkit'
import { login } from '../actions/userActions'

const initialState = {
    info: {},
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
            localStorage.removeItem('token')
        }
    },
    extraReducers: builder => {
        builder
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
    }
})

export const { logout } = userSlice.actions

export const selectUser = (state) => state.user.info
export const selectToken = (state) => state.user.token
export const selectStatus = (state) => state.user.status
export const selectError = (state) => state.user.error

export default userSlice.reducer


