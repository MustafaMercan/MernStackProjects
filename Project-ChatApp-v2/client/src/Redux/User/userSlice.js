import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: "",
        id: "",
    },
    reducers: {
        loginUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        logoutUser: (state, action) => {
                state.name = "",
                state.email = "",
                state.id = ""
        }
    }
})


export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;