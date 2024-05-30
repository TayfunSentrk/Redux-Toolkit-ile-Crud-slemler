import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiUrl from "../../utils/apiUrl";
import axios from "axios";

const initalState={
    chessArray=[],
    loading:false,
    error:""
    selectedChessArray:{}
}
    

const fetchChessList=createAsyncThunk("chess/getAll",async(payload,{rejectWithValue,getState,dispatch})=>{
        try{
            const response=await axios.get(apiUrl);
            return response.chess_players
        }

        catch(error){

            rejectWithValue(error.response.status)
        }
})


const fetchChessGetById=createAsyncThunk("chess/getById",async (payload,{rejectWithValue,state,dispatch})=>{
    try{
        const response=await axios.get(`${apiUrl}/${id}`);
        return response.chess_players;
    }

    catch(error){
        rejectWithValue(error.status.code);
    }
})


const createChess=createAsyncThunk("chess/create",async(payload,{rejectWithValue,state,dispatch})=>{

    try{
       const response= await axios.post(`${apiUrl}`,payload);
       return response.chess_players
    }

    catch(error){
        rejectWithValue(error.status.code);
    }
})