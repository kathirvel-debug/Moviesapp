import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
const INITIAL_STATE = { list: [],search:[], isLoading: false, error: null ,};
export const moviesApi = createAsyncThunk("movieslist/get", async () => {
    try {
      const response = await axios.get("http://localhost:8009/movies/allMovies", {
        headers: {
          Authorization: 'Bearer FSMovies2023'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  });
  
const commentsSlice = createSlice({
    name: "Movies",
    initialState: INITIAL_STATE,
    reducers: {
        fetchStarts: (state, action) => {
            state.search = [...action.payload];
            console.log(state.search);
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(moviesApi.fulfilled,(state,action)=>{
            state.isLoading=false
            state.list=[...action.payload]
            console.log(state.list);
          }).addCase(moviesApi.pending,(state,action)=>{
            console.log("pending");
            state.isLoading=true
          }).addCase(moviesApi.rejected,(state,action)=>{
            console.log("error");
            state.error=action.payload
    
          })
    }
})

export const homeReducer=commentsSlice.reducer;
export const {fetchStarts} = commentsSlice.actions;
export const homeSelector = (state) => state.homeReducer;
