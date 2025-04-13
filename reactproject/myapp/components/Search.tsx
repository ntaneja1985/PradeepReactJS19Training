import  {useState} from 'react'
import {categoryList} from '../src/data/data'
import ProductList from "./ProductList";

function Search() {
    const categories = categoryList;
    const [selectedCategory,setSelectedCategory] = useState("");
    const [totalRecords,setTotalRecords] = useState("");
    const handleCategoryChange = (event) => {
        setSelectedCategory(prev => event.target.value);
    }

    const onUpdateCount = (message:string) =>{
       setTotalRecords('Total Count: '+message);
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
            <ProductList selectedCategory = {selectedCategory} onNotify={(event)=>onUpdateCount(event)} />
            {totalRecords && (<div className='text-success align-content-lg-end'>{totalRecords}</div>)}


        </>
    )
}

export default Search
