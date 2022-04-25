import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { Dispatch } from "redux";

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

export const getData = () => {
    return async(dispatch: Dispatch) => {
        dispatch(UsersActions.fetchStart())
        const fetchData = async() =>{
          const response= await axios.get('https://jsonplaceholder.typicode.com/users'); 
          return response.data 
        }
        try{
            const allUsers = await fetchData();
            dispatch(UsersActions.fetchSuccess(allUsers));
        } catch(error){
            dispatch(UsersActions.fetchError(error))
        }
        

    }
}


export const UsersActions = UsersSlice.actions;

export default UsersSlice
