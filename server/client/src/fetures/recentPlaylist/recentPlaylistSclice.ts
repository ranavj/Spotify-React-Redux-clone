import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAxios } from "../../utility/axiosInterceptor";

export const fetchRecentPlaylist = createAsyncThunk('recentPlaylist/fetchPlaylist',async () => {
    const response = await createAxios().get(`me/player/recently-played`);
    return response.data
})
const recentPlaylistSlice = createSlice({
    name: 'recentPlaylist',
    initialState:{
        recentPlaylist: []
    },
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchRecentPlaylist.fulfilled, (state, action) => {
            state.recentPlaylist = action.payload
        })
        .addCase(fetchRecentPlaylist.rejected, (state, action) => {
            console.log(action);
            
        })
    }
})

export default recentPlaylistSlice.reducer;