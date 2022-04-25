import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isLoading: false,
    userList: [],
    error: ''
}

const UsersSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers: {
        fetchStart: (state) => {state.isLoading = true},
        fetchSuccess: (state, action) =>{
            state.isLoading= false;
            state.userList= action.payload
        },
        fetchError: (state, action) => {
            state.isLoading=false;
            state.error= action.payload
        }
    }
})

export default UsersSlice
