import {Product} from "../src/data/types.ts";
import {useNavigate} from "react-router-dom";




function ProductDetail({product}: {product: Product}) {
    const navigate = useNavigate();
    const redirectToProductView = (id:number) => {
        navigate(`/product-view/${id}`)
    }

    return (
        <>
            <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>
                    <input type="button" className="btn btn-info" onClick={(e)=> redirectToProductView(product.productId)} value="View Product"></input>
                </td>
            </tr>
        </>
    )
}

export default ProductDetail
