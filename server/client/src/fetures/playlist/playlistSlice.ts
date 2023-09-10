import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAxios } from "../../utility/axiosInterceptor";


export const fetchPlayList = createAsyncThunk('playlist/fetchPlaylist',async () => {
    const { data } = await createAxios().get(`users/31b76pvkwu5th3jyejigqhp5kwgu/playlists?limit=20`);
    return data;
})


const playlistSlice = createSlice({
    name: 'playlist',
    initialState : {
        playlist: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPlayList.fulfilled, (state, action) => {
            state.playlist = action.payload
        })
    }
})
export const selectUserPlaylist = (state:any) => state.playlist.playlist


export default playlistSlice.reducer;