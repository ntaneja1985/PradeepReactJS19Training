import  {useState} from 'react'
import {categoryList} from '../src/data/data'
import ProductList from "./ProductList";
import ProductListRedux from "./ProductListRedux";
import store from "../src/store"
import {ProductAction} from "../src/actions/product.actions";
import {useSelector} from "react-redux";


function SearchRedux() {
    const categoriesNew = useSelector(state => store.categoryReducer.categoryList)
    const categories = categoryList;
    const [selectedCategory,setSelectedCategory] = useState("");
    const [totalRecords,setTotalRecords] = useState("");
    const handleCategoryChange = (event) => {
        setSelectedCategory(prev => event.target.value);
        store.dispatch(ProductAction.SETCATEGORY(event.target.value));
    }

    const handleTextChange = (event) => {
        store.dispatch(ProductAction.SETSEARCHTEXT(event.target.value));
    }

    const handleSearchClick = (event) => {
        store.dispatch(ProductAction.FILTERPRODUCT(event.target.value));
    }
    const handleResetClick = (event) => {
        store.dispatch(ProductAction.RESET());
    }

    const onUpdateCount = (message:string) =>{
       setTotalRecords('Total Count: '+message);
    }

    return (
        <>
            <p>Category selected is {selectedCategory}</p>
            <div className="form-group">


                <h4>Search Product</h4>
                Filter:
                <select onChange={(e) => handleCategoryChange(e)}>
                    <option value="">--Select--</option>
                    {categories.map((cat) => {
                        return (
                            <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                        )
                    })}
                </select>
            </div>
            <div className="form-group">
                <label>Search Text:</label>
                <input type="text" onChange={(e) => handleTextChange(e)}/>
            </div>
            <input type="button" className="btn btn-primary" value="Search" onClick={(e) => handleSearchClick(e)}/>
            <input type="button" className="btn btn-primary" value="Reset" onClick={(e) => handleResetClick(e)}/>
            <hr/>
            <ProductListRedux selectedCategory={selectedCategory} onNotify={(event) => onUpdateCount(event)}/>
            {totalRecords && (<div className='text-success align-content-lg-end'>{totalRecords}</div>)}


        </>
    )
}

export default SearchRedux
