import { configureStore } from "@reduxjs/toolkit";
import { isLoggedSlice } from "./Slices/isLogged";
import { dashboardSlice } from "./Slices/Dashboard";

export const store = configureStore({
    reducer: {
        isLoggedIn: isLoggedSlice.reducer,
        dashboard: dashboardSlice.reducer
    }
})