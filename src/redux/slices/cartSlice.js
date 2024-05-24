import { createSlice } from "@reduxjs/toolkit";

const createSlice = createSlice({
    name:'cartItems',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                const remaingproducts = state.filter(item=>item.id!=existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
                state = [...remaingproducts,existingProduct]
            }else{
                state.push = ({...action.payload,quantity:1,totalPrice:action.payload.price*quantity})
            }
               
            }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
