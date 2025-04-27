import ProductDetail from "./ProductDetail";
import {useEffect, useState} from "react";
import {Product} from "../src/data/types";
import ProductService from "../services/Product.service";
import productService from "../services/Product.service";

function Products(){

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        ProductService.getAllProducts()
            .then(resp =>{
                setProducts(resp)
            })

        //Unmounting in useEffect
        return  () => {
            console.log('Unmount product component')
            //Write cleanup functions
        }
    },[])

    const deleteProduct  = (id: number) => {
        productService.deleteProduct(id)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <ProductDetail key={product.productId} product={product} deleteProduct = {deleteProduct} />
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Products