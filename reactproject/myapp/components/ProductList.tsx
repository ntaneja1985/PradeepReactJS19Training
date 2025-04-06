import React from 'react'
import {productList} from "../src/data/data"


function ProductList() {
    const products = productList;

    return (
        <>
        <table style={{ border:"1px solid black" }}>
            <thead>
            <tr>
                <th>Product Id</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Product Price</th>
            </tr>
            </thead>
            <tbody>
            {productList.map((product) => (
                <tr key={product.productId}>
                    <td>{product.productId}</td>
                    <td>{product.productCode}</td>
                    <td>{product.productName}</td>
                    <td>{product.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default ProductList
