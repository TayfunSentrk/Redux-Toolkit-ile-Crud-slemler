import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiUrl from "../../utils/apiUrl";
import axios from "axios";

const initialState={
    chessArray:[],
    loading:false,
    error:"",
    selectedChessArray:{id:"",age:"",biography:"",image_url:""}
}
    

export const fetchChessList=createAsyncThunk("chess/getAll",async(payload,{rejectWithValue,getState,dispatch})=>{
        try{
            const response=await axios.get(apiUrl);
            return response.data
             }

        catch(error){

           return rejectWithValue(error.response.status)
        }
})


export const fetchChessGetById=createAsyncThunk("chess/getById",async (payload,{rejectWithValue,state,dispatch})=>{
    try{
        const response=await axios.get(`${apiUrl}/${payload}`);
        return response.data;
    }

    catch(error){
       return rejectWithValue(error.status.code);
    }
})


export const createChess=createAsyncThunk("chess/create",async(payload,{rejectWithValue,state,dispatch})=>{

    try{
       const response= await axios.post(`${apiUrl}`,payload);
       return response.data
    }

    catch(error){
        return   rejectWithValue(error.status.code);
    }
})


export const deleteChess=createAsyncThunk("chess/delete",async(payload,{rejectWithValue,state,dispatch})=>{
    try{
        await axios.delete(`${apiUrl}/${payload}`)
        return payload;
    }

    catch(error){
        return rejectWithValue(error.status.code);
    }
});

export const updateChess=createAsyncThunk("chess/update",async({id,data},{rejectWithValue,state,action})=>{
        try{
            const reponse=await axios.put(`${apiUrl}/${id}`,data);
            return reponse.data;
        }   

        catch(error){
            return rejectWithValue(error.status.code)
        }   
})

const chessSlicer=createSlice({
    name:"chessSlicer",
    initialState:initialState,
    reducers:{

    },
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
        });

        builder.addCase(createChess.pending,(state,action)=>{
            state.loading=true;
            state.error="";
            
        });

        builder.addCase(createChess.fulfilled,(state,action)=>{
            state.loading=false;
            state.chessArray.push(action.payload);
            state.error="";
        });

        builder.addCase(createChess.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        builder.addCase(deleteChess.pending,(state,action)=>{
            state.loading=true;
            state.error="";
        });
        builder.addCase(deleteChess.fulfilled,(state,action)=>{
            state.loading=false;
            state.error="";
            state.chessArray=state.chessArray.filter((item)=>item.id!==action.payload)
        });

        builder.addCase(deleteChess.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            
        });

        builder.addCase(updateChess.pending,(state,action)=>{
            state.loading=true;
            state.error="";
        });

        builder.addCase(updateChess.fulfilled,(state,action)=>{
            console.log(action);
            console.log(state);
            state.loading=false;
            state.chessArray=state.chessArray.map((item)=>item.id!==action.payload.id?item:action.payload)
            state.error="";
            state.selectedChessArray={id:"",age:"",biography:"",image_url:""};
        });
        builder.addCase(updateChess.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

        builder.addCase(fetchChessGetById.pending,(state,action)=>{
            state.loading=true;
            state.error="";

        });

        builder.addCase(fetchChessGetById.fulfilled,(state,action)=>{
            state.loading=false;
            state.error="";
            state.selectedChessArray=action.payload;
        });

        builder.addCase(fetchChessGetById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            state.selectedChessArray={};
        })



    }
})


const chessReducer=chessSlicer.reducer;

export default chessReducer;