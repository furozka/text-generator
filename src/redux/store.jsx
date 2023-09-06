import { configureStore } from "@reduxjs/toolkit";
import textgenReducer from "./textgenSlice";

export const store = configureStore({
    reducer:{
        textgen: textgenReducer
    }
})