import axios from "axios";
import {Product} from "../src/data/types.ts";

const getAllProducts = async (): Promise<Product[]> => {
    try {
        const resp = await axios.get<Product[]>(`https://localhost:7283/api/ProductApi/getall`)
        return resp.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

function addProduct(productToAdd) {
    return axios.post(`https://localhost:7283/api/ProductApi/add`, JSON.stringify(productToAdd),{
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.data)
    .catch(err => {
        console.log(err)
        throw err;
    })
}

function deleteProduct(id) {
    return axios.delete(`https://localhost:7283/api/ProductApi/delete/${id}`)
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            throw err;
        })
}

const ProductService = {
    getAllProducts,
    addProduct,
    deleteProduct
}
export default ProductService