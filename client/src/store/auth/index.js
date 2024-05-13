import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null,
        token : "",
    },
    reducers : {
        setUserLogin : () => {}
    }
})

export default authSlice.reducer