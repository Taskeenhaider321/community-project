import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/slices/userSlice"
import allUsersReducer from "@/redux/slices/allUsers"
import roomsReducer from "@/redux/slices/roomsSlice"
import { selectedRoomReducer } from "@/redux/slices/roomsSlice";
import  currentMessagesReducer from "./slices/messagesSlice";



export const store = configureStore({
    reducer : {
        user : userReducer,
        allUsers : allUsersReducer,
        rooms : roomsReducer,
        selectedRoom : selectedRoomReducer,
        currentMessages : currentMessagesReducer
    }
})