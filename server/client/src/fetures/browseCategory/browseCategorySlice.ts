import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAxios } from "../../utility/axiosInterceptor";

export const fetchBrowseCategory = createAsyncThunk('browseCategory/fetchBrowseCategory',async () => {
    const { data } = await createAxios().get(`browse/categories?country=IN&limit=38&offset=2`);
    return data;
});


const browseCategorySlice = createSlice({
    name: 'browseCategory',
    initialState : {
        browseCategory: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBrowseCategory.fulfilled, (state, action) => {
            state.browseCategory = action.payload
        })
    }
})

export const  selectBrowseCategory = (state:any) => state.browseCategory.browseCategory

export default browseCategorySlice.reducer;

