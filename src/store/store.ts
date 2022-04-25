import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice";

const store = configureStore({
    reducer: UsersSlice.reducer
});

export type RootState= ReturnType<typeof store.getState>

export default store;