import { createSlice } from "@reduxjs/toolkit";
import { getAsyncTexts } from "./serviceTextgen";


const initialState= {
    inputVal: 4,
    inputFormat: "text",
    paragraphs: []
}
export const textgenSlice = createSlice({
    name: "textgen",
    initialState,
    reducers:{
        setInputVal: (state,action)=>{
            if(action.payload<1){
                state.inputVal = ""
            }else{
                state.inputVal = action.payload
            }
            
        },
        setInputType: (state,action)=>{
            state.inputFormat = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAsyncTexts.fulfilled, (state,action)=>{
            state.paragraphs = action.payload
        })
    }
})


export const {setInputVal, setInputType} = textgenSlice.actions
export const selectInputValue = state=>state.textgen.inputVal
export default textgenSlice.reducer
