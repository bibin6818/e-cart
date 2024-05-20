import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";


const ffStore = configureStore({
reducer:{
            productReducer:productSlice
}

})

export default ffStore