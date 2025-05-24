import  {useEffect, useState} from 'react'
import {productList} from "../src/data/data"
import ProductDetail from "./ProductDetail.tsx";


function ProductListRedux({selectedCategory, onNotify}) {
    let products = productList;
    const [filteredProducts,setFilteredProducts] = useState(products);



    return (
        <>
        <table style={{ border:"1px solid black" }}>
            <thead>
            <tr>
                <th>Product Id</th>
                <th>Product Code</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>View</th>
            </tr>
            </thead>
            <tbody>
            {filteredProducts.map((product) => (
              <ProductDetail key={product.productId} product={product} />
            ))}
            </tbody>
        </table>
        </>
    )
}

export default ProductListRedux
