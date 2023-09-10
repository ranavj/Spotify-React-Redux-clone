import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAxios } from "../../utility/axiosInterceptor";
import { SearchRes } from "./searchInterface";

export const fetchSearch = createAsyncThunk('search/fetchSearch',async (value:string) => {
    const { data } = await createAxios().get(`search?q=${value}&type=album%2Cplaylist%2Cartist%2Ctrack&market=IN`);
    return data;
})

// Debounce function
let debounceTimer:number;
export const debouncedFetchData = (value:string) => (dispatch:Function) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    dispatch(fetchSearch(value));
  }, 300); // Debounce delay (e.g., 300 milliseconds)
};


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search : <SearchRes>{}
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchSearch.fulfilled, (state, action) => {
            state.search = action.payload
        })
    }
})

export const selectSearch = (state:any) => state.search.search

export default searchSlice.reducer;