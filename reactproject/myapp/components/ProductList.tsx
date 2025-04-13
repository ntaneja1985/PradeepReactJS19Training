import  {useEffect, useState} from 'react'
import {productList} from "../src/data/data"
import ProductDetail from "./ProductDetail.tsx";


function ProductList({selectedCategory, onNotify}) {
    let products = productList;
    const [filteredProducts,setFilteredProducts] = useState(products);
    const selectedCategory1 = selectedCategory;

    useEffect(() => {
        console.log('use Effect triggered');
        console.log(products);
        console.log(selectedCategory1);

        if (selectedCategory1) {
            setFilteredProducts(
                products.filter(f => f.category == selectedCategory)
            )
            //products = products.filter(f => f.category == selectedCategory)
        } else {
           //products = products
            setFilteredProducts(products)
        }
        onNotify(filteredProducts.length);
    }, [selectedCategory1]);
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

export default ProductList
