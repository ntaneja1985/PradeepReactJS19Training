import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/product.reducer.ts";
import categoryReducer from "../reducers/categoryReducer.js";

const store = configureStore({
    reducer: {
        productReducer,
        categoryReducer
    }
});

export default store