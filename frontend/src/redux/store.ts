import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "@/redux/slices/tabSlice"



export const store = configureStore({
    reducer : {
        currentTab : tabReducer
    }
})