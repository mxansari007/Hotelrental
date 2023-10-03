import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{

    }
}

export const pageSlice = createSlice({
    name:'pageData',
    initialState,
    reducers:{
        setItemData:(state,action)=>{
            state.data = action.payload;
            localStorage.setItem('pageData',action.payload);
        },
    },
})

export const {setItemData} = pageSlice.actions;
export default pageSlice.reducer;