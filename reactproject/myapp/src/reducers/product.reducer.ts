import {createReducer} from "@reduxjs/toolkit";
import { ProductAction} from "../actions/product.actions.ts";

const initialState = {
    products : [],
    filteredProducts: [],
    selectCategory:"",
    searchText:""
}

function productReducer1(state = initialState,action) {
    switch (action.type) {
        case "product/FILTERPRODUCT":

        case "product/ADDPRODUCT":
    }
}

const  productReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(ProductAction.FILTERPRODUCT,(state,action) =>{
            //state.filteredProducts = action.payload
            console.log(action.payload);
            const { searchText, selectCategory, products} = state;
            const filtered = products.filter(prod =>{
                const checkProductName = searchText ? prod.productName.toLowerCase().includes(searchText) : true;
                const checkSelectedCategory = selectCategory !== "" ? prod.category === selectCategory : true;
                return checkProductName && checkSelectedCategory;
            })
            state.filteredProducts = filtered;
        })
        .addCase(ProductAction.ADDPRODUCT,(state,action) =>{
            console.log(action.payload);
        })
        .addCase(ProductAction.RESET,(state,action) =>{
            state.searchText = "";
            state.filteredProducts = state.products
            state.selectCategory = ""
        })
        .addCase(ProductAction.SETCATEGORY,(state,action) =>{
            state.selectCategory = action.payload;
        })
        .addCase(ProductAction.SETSEARCHTEXT,(state,action) =>{
            state.searchText = action.payload;
        })

})

export default productReducer;