import {useRef} from "react";


function UncontrolledForm() {
    const productIdRef = useRef(0);
    const productNameRef = useRef(null);
    const productCodeRef = useRef(null);
    const productPriceRef = useRef(null);

    const handleSaveProduct = (e) =>{
        e.preventDefault();
        let newProduct = {
            id: productIdRef.current.value,
            name: productNameRef.current.value,
            price: productPriceRef.current.value,
            code: productCodeRef.current.value,
        }
        alert('Product Saved Successfully'+ JSON.stringify(newProduct));
    }
    return (
        <>
        <h4>Add Product (Uncontrolled)</h4>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e)=> handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="text" name="id" className="form-control" ref={productIdRef}/>
                        </div>
                        <div className="form-group">
                            <label>Product Code</label>
                            <input type="text" name="productCode" className="form-control" ref={productCodeRef}/>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="productName" className="form-control" ref={productNameRef}/>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" name="productPrice" className="form-control" ref={productPriceRef}/>
                        </div>
                        <input type="submit" value="Save Product" className="btn btn-primary" />
                    </form>
                </div>

            </div>
        </>
    )
}

export default UncontrolledForm
