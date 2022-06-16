import { configureStore, } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";




const store = configureStore({
  reducer: { counter:counterReducer, auth: authReducer},
}); //reducer can take object combine multiple slices



export default store;
