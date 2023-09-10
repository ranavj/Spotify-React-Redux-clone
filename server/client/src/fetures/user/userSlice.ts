import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAxios } from "../../utility/axiosInterceptor";


export const fetchUser = createAsyncThunk('user/fetchUser',async () => {
    const { data } = await createAxios().get(`me`);
    return data;
})


const userSlice = createSlice({
    name: 'userSlice',
    initialState : {
        user: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})
export const selectUser = (state:any) => state.user.user


export default userSlice.reducer;