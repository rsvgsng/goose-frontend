import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


type initialStateType = {
    isLoading: boolean,
    error?: string | null,
    data: []

}

const initialState: initialStateType = {
    isLoading: false,
    error: null,
    data: []

}


export const fetchDb = createAsyncThunk(
    "dashboard/fetchDashboardData",
    async ()=> {
        const response = await fetch("http://localhost:8000/api/v1/dashboard",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const data = await response.json()
        return data
    })


export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDb.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchDb.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchDb.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default dashboardSlice.reducer

