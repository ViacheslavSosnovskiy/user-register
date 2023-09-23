import { createSlice } from "@reduxjs/toolkit"
import { register, logIn, logOut } from "./authOperations"

const authInitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {
        [register.fulfilled] (state, {payload}) {
            state.user = payload;
            // state.user = { name: payload.name, email: payload.email };
            state.token = payload;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled] (state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled] (state) {
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
        }
    }
})

export const authReducer = authSlice.reducer