import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";
import cartSlice from './cartSlice'



const ekartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})

export default ekartStore