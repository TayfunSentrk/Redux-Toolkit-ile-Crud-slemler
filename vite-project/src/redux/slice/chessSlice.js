import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiUrl from "../../utils/apiUrl";
import axios from "axios";

const initalState={
    chessArray:[],
    loading:false,
    error:"",
    selectedChessArray:{}
}
    

export const fetchChessList=createAsyncThunk("chess/getAll",async(payload,{rejectWithValue,getState,dispatch})=>{
        try{
            const response=await axios.get(apiUrl);
            return response.chess_players
        }

        catch(error){

            rejectWithValue(error.response.status)
        }
})


export const fetchChessGetById=createAsyncThunk("chess/getById",async (payload,{rejectWithValue,state,dispatch})=>{
    try{
        const response=await axios.get(`${apiUrl}/${id}`);
        return response.chess_players;
    }

    catch(error){
        rejectWithValue(error.status.code);
    }
})


export const createChess=createAsyncThunk("chess/create",async(payload,{rejectWithValue,state,dispatch})=>{

    try{
       const response= await axios.post(`${apiUrl}`,payload);
       return response.chess_players
    }

    catch(error){
        rejectWithValue(error.status.code);
    }
})



const chessSlicer=createSlice({
    name:"chessSlicer",
    initalState,
    extraReducers:(builder)=>{
        builder.addCase(fetchChessList.pending,(state,action)=>{
            state.loading=true;
            state.error="";
        });

        builder.addCase(fetchChessList.fulfilled,(state,action)=>{
            state.error="";
            state.loading=false;
            state.chessArray=action.payload;

        });

        builder.addCase(fetchChessList.rejected,(state,action)=>{
            state.error=action.payload,
            state.loading=false;
            state.chessArray=[];
        })


    }
})


const chessReducer=chessSlicer.reducer;

export default chessReducer;