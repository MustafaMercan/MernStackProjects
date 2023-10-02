import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./User/userSlice"
import flagReducer from "./UpdateFlag/updateFlagSlice"
export default configureStore({
    reducer:{
        user:userReducer,
        flag:flagReducer
    }
})