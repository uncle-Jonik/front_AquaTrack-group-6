import { createSlice } from '@reduxjs/toolkit'
import { RefreshUser, loginUser, logoutUser, registerUser, } from './userOperations'

export const initialState = {
    userInfo: {
        email: null,
        name: null,
        gender: null,
        avatar: null,
        weight: null,
        sportsActivity: null,
        waterRate: null,
    },
    isLoggedIn: false,
    isRefreshing: false,
    refreshToken: null,
    accessToken: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //////////////////////////////
    },
    extraReducers: (builder) =>
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                //////////////////////////////
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                //////////////////////////////
            })
            .addCase(logoutUser.fulfilled, (state) => {
                //////////////////////////////
            })
            .addCase(RefreshUser.fulfilled, (state, action) => {
                //////////////////////////////
            })

            .addCase(RefreshUser.rejected, (state) => {
                //////////////////////////////
            }),
})

export const {
    //////////////////////////////
} = userSlice.actions

export const userReducer = userSlice.reducer;