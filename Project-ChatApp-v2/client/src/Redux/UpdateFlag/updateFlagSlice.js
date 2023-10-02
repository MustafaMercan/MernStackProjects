import { createSlice } from "@reduxjs/toolkit";

export const updateFlagSlice = createSlice({
    name:"flag",
    initialState:{
        flag:false
    },
    reducers:{
        updateFlag: (state) => {
            state.flag = !state.flag;
        }
    }
})


export const {updateFlag} = updateFlagSlice.actions;

export default updateFlagSlice.reducer;