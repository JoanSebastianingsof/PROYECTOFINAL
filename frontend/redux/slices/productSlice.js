import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    
        id:null,
        imgUrl:null,
        nombre:null,
        cantidad:null,
        precio:null
    
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToproduct: (state,action) => {
            state = 
                 action.payload
            
        },
     
    },
})

// Action creators are generated for each case reducer function
export const { addToproduct } = productSlice.actions
export const selectProduct = (state) => state
export default productSlice.reducer