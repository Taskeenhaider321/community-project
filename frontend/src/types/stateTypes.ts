import { messageType, roomType, userType } from "./basicTypes"

export type stateType = {
    user : userType,
    allUsers : userType[],
    rooms : roomType[],
    selectedRoom : roomType,
    currentMessages : messageType[]
}