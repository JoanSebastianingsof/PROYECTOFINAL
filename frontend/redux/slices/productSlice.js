import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const productSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        addToProduct: (state,action) => {
            state.items = [
                 action.payload
            ]
        },
       
    },
})

// Action creators are generated for each case reducer function
export const { addToProduct } = productSlice.actions

export const selectProductItems = (state) => state.product.items;
export const selectProductItemsWithId = (state,id) => {
    return state.product.items.filter((item) => item.id === id)
}
export const selectBasketTotal = (state) => {
    return state.product.items.reduce((total,item) => (total += item.price),0)
}
export default productSlice.reducer