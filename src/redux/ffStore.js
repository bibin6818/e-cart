import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishListSlice from "./slices/wishListSlice";

const ffStore = configureStore({
reducer:{
            productReducer:productSlice,
            wishlistReducer:wishListSlice
}

})

export default ffStore