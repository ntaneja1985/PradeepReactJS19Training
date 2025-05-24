import {createReducer} from "@reduxjs/toolkit";
import {FILTERCATEGORY, CHECKNEWCATEGORYADDED} from "../actions/category.actions.js";
import categoryList from "../data/data.js";

const initialState = {
    categoryList: [categoryList],
    newRecordAdded: false,
}

const  categoryReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(FILTERCATEGORY,(state,action) =>{
            //state.filteredProducts = action.payload
        })
        .addCase(CHECKNEWCATEGORYADDED,(state,action) =>{

        })
})

export default categoryReducer;