import React, {useState} from 'react'
import {categoryList} from "../src/data"
import ProductList from "./ProductList";

function Search() {
    const categories = categoryList;
    const [selectedCategory,setSelectedCategory] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(prev => event.target.value);

    }

    return (
        <>
            <p>Category selected is {selectedCategory}</p>
        <h4>Search Product</h4>
            Filter:
            <select onChange={(e)=>handleCategoryChange(e)}>
                <option value="">--Select--</option>
                {categories.map((cat)=>{
                    return (
                        <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                    )
                })}
            </select>
            <hr/>
            <ProductList/>
        </>
    )
}

export default Search
