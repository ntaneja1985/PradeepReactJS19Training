import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productList} from "../src/data/data"
import {Product} from "../src/data/types.ts";

function ProductView() {
    //Used to read the route information
    const {id} = useParams();
    const loc = useLocation();
    const queryParams = new URLSearchParams(loc.search);
    const city = queryParams.get("city");
    const country = queryParams.get("country");

    const navigate = useNavigate();
    const [product,setProduct] = useState<Product>({});
    useEffect(() => {
        const productObj = productList.filter(x =>x.productId == id);
        setProduct(...productObj)
    },[id])
    return (
        <>
            <h4>Product Details</h4>
            <p>Product Id: {product.productId}</p>
            <p>Product Name: {product.productName}</p>
            <p>Product Code: {product.productCode}</p>
            <button className="btn btn-dark" onClick={() => navigate(-1)}>Back</button>
            <p>Route Parameter: {id}</p>
            <p>Query string Parameter : {city && (<strong>{city}-{country}</strong>)}</p>
        </>
    )
}

export default ProductView
