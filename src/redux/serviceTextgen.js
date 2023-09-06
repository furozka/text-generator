import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAsyncTexts = createAsyncThunk("paragraphs/getAsyncTexts", async (numb=4,format="html")=>{
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${numb}&format=${format}`)
    return res.data
})