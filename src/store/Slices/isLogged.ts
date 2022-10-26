import { createSlice } from "@reduxjs/toolkit";



type initialStateType = {
    isLogged: boolean
}

const initialState: initialStateType = {
    isLogged: false
}


export const isLoggedSlice = createSlice({
    name: "isLogged",
    initialState: initialState,
    reducers:{
        login: (state) => {
            state.isLogged = true

        },
        logout: (state) => {
            state.isLogged = false
        }
    }
})

export const { login, logout } = isLoggedSlice.actions