import {ChangeEvent, FormEvent, useState} from "react";
import categoryList from "../src/data/data";
import {customError, validateProductForm} from "../utilities/validation.ts";


function ControlledForm() {
    const product = {
        productId: 0,
        productCode: "",
        productName: "",
        productPrice: "",
        category:""
    }
    
    const [productFormData,setProductFormData] = useState(product);
    const [errors,setErrors] = useState<customError>({title: null})

    const handleSaveProduct = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(productFormData)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setProductFormData(prev => ({...prev,[e.target.name]: e.target.value}));
        setErrors(validateProductForm(e.target.name,e.target.value));
    }
    return (
        <>
            <h4>Add Product (Uncontrolled)</h4>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="text" name="productId" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Code</label>
                            <input type="text" name="productCode" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="productName" className="form-control" onChange={(e) => handleChange(e)}/>
                            {errors && errors.hasOwnProperty('title') && (<span className="text-danger">{errors.title}</span>)}
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" name="productPrice" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" onChange={(e) => handleChange(e)}>
                                <option value="">---</option>
                                {categoryList.map((cat,_)=>(
                                    <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Save Product" className="btn btn-primary"/>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ControlledForm
