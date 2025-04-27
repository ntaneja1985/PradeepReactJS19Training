import {ErrorMessage, Field, Form, Formik, FormikFormProps} from "formik";
import categoryList from "../src/data/data.ts";
// import {customError} from "../utilities/validation.ts";
import * as Yup from 'yup';
import productService from "../services/Product.service.ts";


function FormikForm() {
    const initialProductForm = {
        productId: 0,
        productCode: "",
        productName: "",
        productPrice: 0,
        category:""
    }

    // const errors: customError = {title: null};

    const categories = categoryList;

    const handleSaveProduct = (frm: FormikFormProps) =>{
        console.log(frm)
        productService.addProduct(frm)
            .then(response => {
                if(response){
                    alert("Product Added");
                }
            })
        //alert('Product saved successfully' + JSON.stringify(frm));
    }

    // const validateFn = (frm) =>{
    //     let errors = {};
    //     if(!frm.productCode){
    //         errors.productCode = "Product code is mandatory";
    //     }
    //     return errors;
    // }

    const productValidationSchema = Yup.object({
        productCode: Yup.string().required('Product code is mandatory'),
        productName: Yup.string().required('Product name is mandatory'),
        productPrice: Yup.number()
            .required('Product price is mandatory')
            .min(1,'Enter amount greater than 1'),
        category: Yup.string()
            .required('Category is mandatory')
            .notOneOf(["0"],'Select a valid category')

    })

    return (
        <>
            <h4>Formik Form</h4>
            <div className="row">
                <div className="col-lg-6">
                    <Formik initialValues={initialProductForm} onSubmit={handleSaveProduct}
                            enableReinitialize={true}
                            // validate={validateFn}>
                            validationSchema={productValidationSchema}>
                        <Form>
                            <div className="form-group">
                                <label>Product Id</label>
                                <Field name="productId" className="form-control"></Field>
                            </div>
                            <div className="form-group">
                                <label>Product Code</label>
                                <Field name="productCode" className="form-control"></Field>
                            </div>
                            <ErrorMessage className="text-danger" component="label" name="productCode"></ErrorMessage>
                            <div className="form-group">
                                <label>Product Name</label>
                                <Field name="productName"  className="form-control"></Field>
                                <ErrorMessage className="text-danger" component="label" name="productName"></ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <Field name="productPrice" className="form-control"></Field>
                            </div>
                            <ErrorMessage className="text-danger" component="label" name="productPrice"></ErrorMessage>
                            <div className="form-group">
                                <label>Category</label>
                                <Field as="select" name="category" className="form-select">
                                    <option value="">---Select---</option>
                                    {categories.map((cat,_)=>(
                                        <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                    ))}
                                </Field>
                                <ErrorMessage className="text-danger" component="label" name="category"></ErrorMessage>
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit"/>
                        </Form>
                    </Formik>
                </div>


            </div>
        </>
    )
}

export default FormikForm
