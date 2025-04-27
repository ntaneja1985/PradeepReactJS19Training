import axios from "axios";

function getAllProducts(){
    return axios.get(`https://localhost:7283/api/ProductApi/getall`)
    .then(res => res.data)
        .catch(err => {
            console.log(err)
            throw err;
        });
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