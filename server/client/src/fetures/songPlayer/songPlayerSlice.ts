import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAxios } from "../../utility/axiosInterceptor";

export const playSong = createAsyncThunk('playSong/fetchCurrentSong', async (context_uri:string) => {
    const response = await createAxios().put(`me/player/play`,{
        uris: [context_uri]
    })
    const data = await response.data
    return data
})
const songPlayerSlice = createSlice({
    name: 'songPlayer',
    initialState:{
        songPlayer: {}
    },
    reducers: {},
    extraReducers: builder =>  {
        builder.addCase(playSong.fulfilled, (state, action) => {
            state.songPlayer = action.payload
        })
    }
})

export const selectCurrentSong = (state:any) => state.songPlayer.songPlayer

export default songPlayerSlice.reducer;