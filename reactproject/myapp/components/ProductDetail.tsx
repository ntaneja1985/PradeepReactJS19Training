import {Product} from "../src/data/types.ts";
import {useNavigate} from "react-router-dom";




function ProductDetail({product,deleteProduct}) {
    const navigate = useNavigate();
    console.log(product);
    const redirectToProductView = (id:number) => {
        navigate(`/product-view/${id}`)
    }

    return (
        <>
            <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>
                    <input type="button" className="btn btn-info" onClick={(e)=> redirectToProductView(product.productId)} value="View Product"></input>
                </td>
                <td>

                </td>
                <td>
                    <input type="button" className="btn btn-info btn-danger"
                           onClick={(e) => deleteProduct(product.productId)} value="Delete Product"></input>
                </td>
            </tr>
        </>
    )
}

export default ProductDetail
