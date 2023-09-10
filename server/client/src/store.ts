import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from './fetures/playlist/playlistSlice';
import recentPlaylistReducer from './fetures/recentPlaylist/recentPlaylistSclice';
import browseCategoryReducer from './fetures/browseCategory/browseCategorySlice';
import userReducer from './fetures/user/userSlice';
import searchReducer from './fetures/search/searchSlice';
export const store = configureStore({
    reducer: {
        playlist: playlistReducer,
        recentPlaylist: recentPlaylistReducer,
        browseCategory: browseCategoryReducer,
        user: userReducer,
        search: searchReducer
    }
})