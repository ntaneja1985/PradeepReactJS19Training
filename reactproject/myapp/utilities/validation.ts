export type customError = {
    title: string | null;
}

export const validateProductForm = (fieldName:string,fieldValue:string) =>{
    let errors: customError = {title: null}
    if(fieldName == "productName"){
        if(!fieldValue.length){
            errors.title = "Product Name is mandatory"
        } else {
            errors.title = ""
        }
    }
    return errors;
}
