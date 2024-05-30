import { configureStore } from "@reduxjs/toolkit";
import chessReducer from "../slice/chessSlice";



const store=configureStore({
    reducer:{
        chessReducer:chessReducer
    }
})

export default store