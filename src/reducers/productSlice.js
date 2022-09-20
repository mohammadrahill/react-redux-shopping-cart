import { createSlice } from "@reduxjs/toolkit";


export const STATUES = Object.freeze({
    IDLE: "idle",
    LOADING: "Loading",
    ERROR: "Error",
})



const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        status: STATUES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});


export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUES.ERROR));
        }
    };
}