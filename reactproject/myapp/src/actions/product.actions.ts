import {createAction}  from "@reduxjs/toolkit";

// export const FILTERPRODUCT = createAction("product/FILTERPRODUCT");
// export const ADDPRODUCT = createAction("product/ADDPRODUCT");


export const ProductAction = {
    FILTERPRODUCT: createAction("product/FILTERPRODUCT"),
    ADDPRODUCT: createAction("product/ADDPRODUCT"),
    SETCATEGORY: createAction("product/setCategory"),
    SETSEARCHTEXT: createAction("product/setSearchText"),
    RESET: createAction("product/Reset"),
}
