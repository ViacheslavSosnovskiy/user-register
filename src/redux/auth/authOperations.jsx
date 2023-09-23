import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

// const instance = axios.create({  
//     baseURL: "https://api.escuelajs.co/api/v1"
// })

// const  setToken = token => {
//     instance.defaults.headers.common['Authorization'] = token
// }

// export const removeToken = token => {
//     delete instance.defaults.headers.common['Authorization']
// }

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('/users/signup', credentials)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await axios.post('/users/login', credentials)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const logOut = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout')
})

export const getPCurrentUser = createAsyncThunk('auth/getCurrentUser', async () => {
    const {data} = await axios.get('/users/current')
    return data
})
