import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:'mywishlist',
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToWishList} = wishListSlice.actions
export default wishListSlice.reducer