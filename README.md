# React JS 19 Training by Pradeep
- Library is known for speed, scalability, simplicity
- Used for developing reusable UI components
## Javascript Refresher
- Javascript is a dynamic scripting language for the web.
- Interpreted at the client side(V8 Engine)
- Has Ecmascript standards: Standard for scripting language.
- HTML -W3C Standards
- 'var' is global/function scope
- 'let' is block scope
- In hoisting all declarations of variables is moved to the top
- if the variable is not defined and, we write console.log(i), it will give an error: i is not defined.
- var keyword supports hoisting
- let does not support hoisting 
- Hoisting works only with the 'var' keyword.
- map() - Transforming each item in the array. Can be used for modifying objects
- spread/rest operator
- The spread () and rest () operators in JavaScript look identical but serve distinct purposes based on their context:
- The spread operator expands elements. It's used to spread out the contents of arrays, objects, or other iterables into individual elements.
-  To create shallow copies or merge objects.
- The rest operator collects elements. It's used to group remaining elements into a new array or object.
```js
//Function Parameters: To collect multiple arguments into a single array.
function sum(...args) {
     return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

//Array Destructuring: To extract specific elements and gather the rest
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]

//Object Destructuring: To collect remaining properties in an object.
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest); // { b: 2, c: 3 }



```
- Spread is about expansion (breaking things apart).
- Rest is about aggregation (grouping things together).
- Think of them as opposite forces: spread is like unpacking a gift box, while rest is like packing items into a bag!
- We have concept of template literals also or string interpolation
- Export Default is used when we have only one thing to export, if we have multiple things to export in that case, in that case use export class or export function or export object
- We load modules dynamically based on demand
- In JavaScript, modules are reusable pieces of code that can be imported and exported between different files. They help organize code into manageable chunks, improve maintainability, and enable better encapsulation.
- In Javascript we can have named function, arrow function or anonymous functions
- ![img.png](img.png)
- ![img_3.png](img_3.png)
- ![img_4.png](img_4.png)
- We already have a predefined keyword 'arguments' available in each function
- This 'arguments' keyword is not available in arrow function
- If we have to use arguments in arrow function we can do it like this
- ![img_5.png](img_5.png)
- In C# we have params keyword. Similar is the case here.
- ES6 Modules (ECMAScript Modules)
-  UMD (Universal Module Definition
- CommonJS Modules
- A module typically has its own scope, meaning variables and functions in one module are not available in another unless explicitly exported.
- Now javascript supports static methods also
```js
class Fruit {
    static generate(){
        console.log('Generate Fruits');

    }
}

Fruit.generate(); //Output: Generate Fruits
```
- The reduce method in JavaScript is a powerful function used on arrays to reduce them to a single value. 
- It works by executing a callback function on each element of the array, accumulating the result into a single output. 
- The method is commonly used for tasks like summing up numbers, concatenating strings, or processing data structures.
- Reduce method iterates through an array and returns single value
- We can do aggregations through reduce() method
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 10

```


### NodeJS is a Javascript Runtime Environment
- Cross-platform
- Open Source
- Node Version Manager(NVM) allows us to install different versions of Node in the system and we can switch between them
```js
//Javascript doesnot have datatypes
var i = 10;
i = "Nishant";
i = true;

let i = 1;
var a = 100;
let b = 200;


for(var i1 = 0; i1<3;i1++)
{
    console.log(i1);
}
console.log(i1);//will give output of 3
//Use let keyword instead

//const works similar to let in having the same scope(block)

let arr = [1,2,3,4,5];
console.log(arr);

//for of --foreach loop

//will give the actual number
for(let num of arr)
{
    console.log(num);
}

//will give index of the number
for(let num1 in arr)
{
    console.log(num1);
}

let newArr = arr.map((val,index)=>{
    return val * 2;
})

console.log(newArr);

let students = [{name:'nishant',marks:'37'},{name:'nalin',marks:'35'}];
let filteredStudents = students.map((student,index)=>(

    {...student,remark:'pass'
    }
));
console.log(filteredStudents)


//spread operator - expanding an array
//rest operator - collect into an array

let nums1 = [1,2,3];
let nums2 = [4,5,6];
let nums3 = [...nums1,...nums2];
for(let obj of nums3)
{
    console.log(obj);//1,2,3,4,5,6

}

//Destructuring
let [a,b,c,...rest] = nums3;
console.log(rest);//Output is 4,5,6

function add(x,y,...remainingNumbers)
{
    let result =  x + y;
    for(let n of remainingNumbers)
    {
        result += n;
    }
    return result;
}

add(1,2,3,4,5,6,7,8,9);

```


## Getting started with React
- Developed by Facebook
- First version of React was 0.3.0-0.8.0 -> 2013
- React v15 - 2016
- v16 - 2017
- v18- 2022 -->very stable version
- v19 - December 2024
- React is a core library and ReactDOM for manipulating DOM and React Native is for Mobile Apps
- React Frameworks: Next.js, Gatsby, Remix
- Install vite
- create-react-app has been deprecated
- Vite: Build tool for faster development
- Can do bundling, minification very fast
- It can spin up dev server faster
- It supports HMR(Hot Module Replacement)
```shell
npm create vite@latest my-react-app -- --template react-ts
```
- Vite bundles the code into es standard
- NPM resolves inter-dependencies
- NPM(Node package manager) used for downloading and sharing the js/css package from public repository
- NPM can read package.json file
- Go into the folder and run npm run dev
- Please note react is a core library and react-dom is used to work with HTML
- react-native is used to work with mobile apps
- dev dependencies section in package.json is only required to run react locally. 
- For .eg we can have vite, eslint
```json
"devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0"
  }
```
- npm run dev--> start a live dev server ==> dynamically transform your jsx into es modules and then load it on demand
- For production, vite will do minification, bundling, code splitting, tree shaking process.
- 2 ways of creating components: class component and function components
- JSX: Mix of Javascript + HTML
- JSX is type-safe as well
- JSX follows camel casing
- JSX helps to create virtual DOM and render HTML
- React always returns a single DOM element
- React fragment: <></>
#### <StrictMode>
- Strict Mode is a component which is basically doing checks to find bugs during development.
- Strict Mode does cause your components to render twice—but only in development mode and only under specific conditions. This is an intentional behavior designed to help you catch potential issues in your code, such as impure rendering logic or side effects that might break in future React updates (e.g., with concurrent rendering).
- Yes, in React, Strict Mode does cause your components to render twice—but only in development mode and only under specific conditions. This is an intentional behavior designed to help you catch potential issues in your code, such as impure rendering logic or side effects that might break in future React updates (e.g., with concurrent rendering).
- When you wrap your app or a component in <React.StrictMode>, React simulates mounting, unmounting, and remounting your components during development. This process often results in your component’s render function being called twice in a row.
- The goal is to:
- Expose side effects: If your component has unintended side effects during rendering (e.g., modifying global state or DOM directly), rendering twice will make these issues obvious.
- Prepare for concurrency: Features like React 18’s concurrent rendering may unmount and remount components unpredictably. Double rendering ensures your components are resilient to this.

### Databinding
- Mechanism to bind the data values into html element
- Supports one way binding {}
- We also have event binding
- For 2 way binding, we will use useState() hook
- One value is for reading, other is for setting that value
- Hooks are functions in React which can run some code for you similar to page lifecycle functions
```js
import {useEffect, useState} from "react";


function Databinding() {
    const name="nishant";
    const [fullName,setFullName] = useState('nishant taneja');
    const handleClick = (e) =>{
        alert("Hello");
        e.target.value = "Clicked me";
        e.target.style.backgroundColor = "red"
        setTimeout(()=>{
            e.target.value = "Click me";
        },1000)
    }

    const handleTextChange = (e) =>{
            setFullName(e.target.value);
    }

    useEffect(()=>{
        console.log('called')
    },[fullName]);
    return (
        <div>
            <h5>This is my component</h5>
            <p>My name is {name} </p>
            <p> Full Name is {fullName}</p>
            <i>Full name is {fullName}</i>
            <input type = "text" value={name} onChange = {(e)=>handleTextChange(e)}/>
            <input type="button" value="Click me" onClick={(e) => handleClick(e)}/>
        </div>
    )
}

export default Databinding

```
### Virtual DOM
- Creates an in-memory representation of our real DOM.
- Maintain 2 DOM and based on comparison, it will sync changes in Real DOM.

### useEffect
- When the state or property is changed, useEffect will be triggered.
- A function that runs code at specific time, based on dependencies provided.
- It will automatically trigger based on state changed.
```js
useEffect(()=>{
    console.log('called')
},[fullName]);
```
- In React, the  hook is used for managing side effects in functional components. 
- Side effects are tasks that aren't directly related to rendering the UI but are still essential, like fetching data, subscribing to events, or manipulating the DOM. 
- Essentially,  lets you run specific code after React has updated the DOM
- Here is a breakdown of its uses:
- Data Fetching: You can fetch data from APIs when a component mounts and update its state based on the result.
- Event Listeners: Attach or clean up event listeners like resizing windows.
- Subscriptions: Handle subscriptions to services or libraries (e.g., WebSocket connections).
- Clean-Up Tasks: Automatically clean up resources like timers, intervals, or subscriptions when the component unmounts.

### useRef
- In React,  is a hook that provides a way to persist values across renders without causing re-renders. 
- It essentially creates a mutable object that you can access and modify directly.
- Accessing DOM Elements: It allows you to directly interact with a DOM element (e.g., focusing an input field or measuring an element's dimensions)
```js
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return (
  <div>
    <input ref={inputRef} type="text" />
    <button onClick={focusInput}>Focus Input</button>
  </div>
);
```

- To display a list of products use this code:
- ![img_6.png](img_6.png)
```js
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

```

## Routing in React
- Routing in React enables navigation between different views or pages in a single-page application (SPA) without full page reloads. 
- React itself doesn’t include built-in routing, so libraries like React Router DOM are commonly used.
- npm install react router DOM
```js
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Databinding from "../src/Databinding";
import DiscountOffer from "./DiscountOffer";
import ProductList from "./ProductList";
import Search from "./Search";
import Navbar from "./Navbar";

function Layout() {
    return (
        <>
          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Search/>} />
                  <Route path="/products" element={<Search/>} />
                  <Route path="/databinding" element={<Databinding/>} />
                  <Route path="*" element={<Databinding/>} />
              </Routes>
          </BrowserRouter>
        </>
    )
}

export default Layout

```
- To navigate between components we can set up a Navbar component and use NavLink from React-Router-DOM
```js
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                           <NavLink to='/databinding' className='nav-link'>Data Binding</NavLink>
                            <NavLink to='/offer' className='nav-link'>Offer</NavLink>
                            <NavLink to='/products' className='nav-link'>Products</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

```
- ![img_7.png](img_7.png)
- To pass data from child to parent we use callback functions
- In the below code we are passing data from child to parent through onNotifyCount() method
```js
import  {useState} from 'react'
import {categoryList} from '../src/data/data'
import ProductList from "./ProductList";

function Search() {
    const categories = categoryList;
    const [selectedCategory,setSelectedCategory] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(prev => event.target.value);
    }

    const onUpdateCount = (message:string) =>{
        alert(message);
    }

    return (
        <>
            <p>Category selected is {selectedCategory}</p>
        <h4>Search Product</h4>
            Filter:
            <select onChange={(e)=>handleCategoryChange(e)}>
                <option value="">--Select--</option>
                {categories.map((cat)=>{
                    return (
                        <option key={cat.id} value={cat.id}>{cat.categoryName}</option>
                    )
                })}
            </select>
            <hr/>
            <ProductList selectedCategory = {selectedCategory} onNotify={(event)=>onUpdateCount(event)} />
        </>
    )
}

export default Search


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


```
- useParams() is used to read the route parameter
- useNavigate() is used to navigate from one route to another
- To get parameters from queryString use the following code:
```js
 const loc = useLocation();
const queryParams = new URLSearchParams(loc.search);
const city = queryParams.get("city");
const country = queryParams.get("country");
```
- ![img_8.png](img_8.png)

## Lazy Loading
- Download the component on demand based on requested URL
- For this we use the Suspense component of React along with lazy keyword
- Rather than import directly from the top we use the lazy keyword along with import keyword
```js
function Layout() {

    const Databinding = lazy(()=> import('../src/Databinding.tsx'))
    const DiscountOffer = lazy(()=> import('./DiscountOffer.tsx'))
    const Search = lazy(()=> import('./Search.tsx'))
    const ProductView = lazy(()=> import('./ProductView.tsx'))

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Suspense fallback={(<div>Loading...</div>)}>
                    <Routes>
                        <Route path="/" element={<Search/>} />
                        <Route path="/products" element={<Search/>} />
                        <Route path="/offer" element={<DiscountOffer/>} />
                        <Route path="/databinding" element={<Databinding/>} />
                        <Route path="*" element={<Databinding/>} />
                        <Route path="/product-view/:id" element={<ProductView/>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default Layout
```
- In javascript, every object is mutable
- However, in React, we operate on immutable objects
- In React, re-rendering happens when the state or props change
- So, if we change the object, in React, it will not update the component
- So, therefore, we need immutable objects in React
```js
const obj = {personId: 1, personName: "nishant"}
obj.personId = 4;
console.log(obj.personId);

const array = ['a','b','c'];
array.push('e')
array.concat('g');

arr[0] = 'r';
console.log(array);

//-------Immutables in React
const obj1 = {personId: 1, personName: "nishant"}
//First parameter will copy obj1 and second parameter will overrite the personId
const obj2 = {...obj1, personId: 2}
console.log("Immutable Object="+obj2);
const obj4 = {...obj1, personId: 2,address:"chandigarh"}
console.log(obj4)

const arr1 = ['a','b','c'];
const arr1Copy = [...arr1,'y'];
const arr1Copy2 = arr1.concat('z');
console.log("Immutable",arr1Copy);

```
## Forms
- Uncontrolled forms means forms without any state management
- We directly refer to our DOM element using useRef()
```js
import {useRef} from "react";


function UncontrolledForm() {
    const productIdRef = useRef(0);
    const productNameRef = useRef();
    const productCodeRef = useRef();
    const productPriceRef = useRef();

    const handleSaveProduct = (e) =>{
        e.preventDefault();
        let newProduct = {
            id: productIdRef.current.value,
            name: productNameRef.current.value,
            price: productPriceRef.current.value,
            code: productCodeRef.current.value,
        }
        alert('Product Saved Successfully'+ JSON.stringify(newProduct));
    }
    return (
        <>
        <h4>Add Product (Uncontrolled)</h4>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e)=> handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="text" name="id" className="form-control" ref={productIdRef}/>
                        </div>
                        <div className="form-group">
                            <label>Product Code</label>
                            <input type="text" name="productCode" className="form-control" ref={productCodeRef}/>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="productName" className="form-control" ref={productNameRef}/>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" name="productPrice" className="form-control" ref={productPriceRef}/>
                        </div>
                        <input type="submit" value="Save Product" className="btn btn-primary" />
                    </form>
                </div>

            </div>
        </>
    )
}

export default UncontrolledForm

```
### Controlled Form
- Here we make use of useState()
- We use onHandleChange to set Model Properties
- Uncontrolled forms are lightweight and offer faster performance, but controlled forms allow us to do validations and implement complex business logic
- React Hook Forms can be used for uncontrolled forms, formik is used for controlled forms
```js
import {useState} from "react";
import categoryList from "../src/data/data";


function UncontrolledForm() {
    const product = {
        productId: 0,
        productCode: "",
        productName: "",
        productPrice: "",
        category:""
    }

    const [productFormData,setProductFormData] = useState(product);

    const handleSaveProduct = (e) =>{
        e.preventDefault();
        console.log(productFormData)
    }

    const handleChange = (e) =>{
        setProductFormData(prev => ({...prev,[e.target.name]: e.target.value}));
    }
    return (
        <>
            <h4>Add Product (Uncontrolled)</h4>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="text" name="productId" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Code</label>
                            <input type="text" name="productCode" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="productName" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" name="productPrice" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" onChange={(e) => handleChange(e)}>
                                <option value="">---</option>
                                {categoryList.map((cat,index)=>(
                                    <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Save Product" className="btn btn-primary"/>
                    </form>
                </div>

            </div>
        </>
    )
}

export default UncontrolledForm

```
- We can add a separate validation.ts file
```js
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
```
- We can use it inside our controlled form like this
```js
import {ChangeEvent, FormEvent, useState} from "react";
import categoryList from "../src/data/data";
import {customError, validateProductForm} from "../utilities/validation.ts";


function ControlledForm() {
    const product = {
        productId: 0,
        productCode: "",
        productName: "",
        productPrice: "",
        category:""
    }
    
    const [productFormData,setProductFormData] = useState(product);
    const [errors,setErrors] = useState<customError>({title: null})

    const handleSaveProduct = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(productFormData)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        setProductFormData(prev => ({...prev,[e.target.name]: e.target.value}));
        setErrors(validateProductForm(e.target.name,e.target.value));
    }
    return (
        <>
            <h4>Add Product (Uncontrolled)</h4>
            <div className="row">
                <div className="col-lg-6">
                    <form onSubmit={(e) => handleSaveProduct(e)}>
                        <div className="form-group">
                            <label>Product Id</label>
                            <input type="text" name="productId" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Code</label>
                            <input type="text" name="productCode" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="productName" className="form-control" onChange={(e) => handleChange(e)}/>
                            {errors && errors.hasOwnProperty('title') && (<span className="text-danger">{errors.title}</span>)}
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" name="productPrice" className="form-control" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select name="category" onChange={(e) => handleChange(e)}>
                                <option value="">---</option>
                                {categoryList.map((cat,_)=>(
                                    <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Save Product" className="btn btn-primary"/>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ControlledForm

```
## Using Formik for Controlled Forms
- Lightweight, simple to use and simplifies state management
- Formik keeps track of form values, errors, and visited fields, making it easier to manage complex forms.
- It supports both synchronous and asynchronous validation. You can use libraries like Yup for schema-based validation or write custom validation logic.
- The enableReinitialize prop in Formik is a boolean that controls whether the form should reset its state when the initialValues prop changes. By default, this is set to false, meaning the form won't automatically update its state even if initialValues change.
- When enableReinitialize is true: If the initialValues prop changes, Formik will reset the form's state (values, errors, touched fields) to match the new initialValues.
- Use Case in Dynamic Forms: When the form's initial values depend on external data that might change (e.g., fetching data from an API).
- Another use case is Resetting Forms: When you need the form to reset automatically after certain actions, like switching between different datasets
- An example could be like this
```js
import React from 'react';
import { Formik, Form, Field } from 'formik';

function MyForm({ initialValues }) {
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true} // Automatically reset form when initialValues change
            onSubmit={(values) => {
                console.log('Submitted values:', values);
            }}
        >
            {() => (
                <Form>
                    <Field name="name" placeholder="Enter name" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}

// Usage example
<MyForm initialValues={{ name: 'John' }} />;
```
- We can use Formik as follows:
```js
import {ErrorMessage, Field, Form, Formik} from "formik";
import categoryList from "../src/data/data.ts";
import {customError} from "../utilities/validation.ts";


function FormikForm() {
    const initialProductForm = {
        productId: 0,
        productCode: "",
        productName: "",
        productPrice: "",
        category:""
    }

    // const errors: customError = {title: null};

    const categories = categoryList;

    const handleSaveProduct = (frm) =>{
        alert('Product saved successfully' + JSON.stringify(frm));
    }

    const validateFn = (frm) =>{
        let errors = {};
        if(!frm.productCode){
            errors.productCode = "Product code is mandatory";
        }
        return errors;
    }

    return (
        <>
            <h4>Formik Form</h4>
            <div className="row">
                <div className="col-lg-6">
                    <Formik initialValues={initialProductForm} onSubmit={handleSaveProduct}
                            enableReinitialize={true}
                            validate={validateFn}>
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
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <Field name="productPrice" className="form-control"></Field>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <Field as="select" name="category" className="form-select">
                                    <option value="">---Select---</option>
                                    {categories.map((cat,index)=>(
                                        <option value={cat.id} key={cat.id}>{cat.categoryName}</option>
                                    ))}
                                </Field>
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

```
### Using Yup validation library
- Yup is a JavaScript schema builder for runtime value parsing and validation. 
- It allows you to define schemas to validate and transform data, ensuring that the data conforms to specific rules or shapes. 
- It's widely used in both client-side and server-side applications for form validation and data processing.
- Asynchronous Validation: Yup supports asynchronous validation, making it suitable for scenarios like server-side checks.
- Integration: Yup integrates seamlessly with libraries like Formik for form validation.
- Validation: Yup provides a rich set of validation methods, such as .required(), .min(), .max(), .email(), and many others.
- Yup is particularly powerful for handling complex validation rules and is a go-to choice for many developers working with forms.
```js
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  age: Yup.number()
    .min(18, 'Age must be at least 18')
    .required('Age is required'),
});

const formData = { age: 16 };

validationSchema
  .validate(formData)
  .then(() => console.log('Validation passed'))
  .catch((err) => console.log(err.errors));
```
- We set it up it in code as follows:
```js
import {ErrorMessage, Field, Form, Formik, FormikFormProps} from "formik";
import categoryList from "../src/data/data.ts";
// import {customError} from "../utilities/validation.ts";
import * as Yup from 'yup';


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
        alert('Product saved successfully' + JSON.stringify(frm));
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

```

### Interacting with a WebAPI
- We will add the axios package
- We will create a webapi with CRUD operations
- Then we will create a service to perform the CRUD operations on the UI
- axios is used to make http request from browser
```ts
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
```
- Axios allows us to add interceptors, Remember the Bearer Authorization Token for sending JWT token
- Interceptors allow us to add custom logic to the request/response.
```ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Define the API instance
const api: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // Optional: Set timeout
});

// Request Interceptor
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Retrieve token from localStorage (or another source, e.g., Redux, Context)
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Return response as is
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      // Example: Clear token and redirect
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```
- In the UI we can make use of these crud operations like this 
```ts
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
```

### Using Cancellation Token in Axios
- In Axios, you can use a cancellation token to cancel ongoing HTTP requests, 
- which is useful for scenarios like aborting requests when a user navigates away from a page or when you need to cancel a request manually.
- Axios provides a CancelToken mechanism for this purpose, which can be integrated into a React TypeScript application.
- CancelToken: A token generated by axios.CancelToken.source() that can be passed to a request to allow cancellation.
- Cancellation: Call the cancel() method on the token source to abort the request.
- Use Case: Cancel requests when a component unmounts or when a user triggers an action (e.g., clicking a "Cancel" button).
- Modify the Axios Instance with Cancellation Support 
```ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';

// Define the API instance
const api: AxiosInstance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000,
});

// Store cancel tokens for tracking (optional, for centralized cancellation)
const cancelTokens: Map<string, CancelTokenSource> = new Map();

// Request Interceptor
api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Add auth token
        const token = localStorage.getItem('authToken');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Add cancel token if provided in config
        if (config.cancelToken) {
            return config;
        }

        // Optionally create a new cancel token for each request
        const source = axios.CancelToken.source();
        config.cancelToken = source.token;

        // Store the cancel token (e.g., using a unique request ID or URL)
        const requestKey = config.url || 'default';
        cancelTokens.set(requestKey, source);

        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Clean up cancel token after successful response
        const requestKey = response.config.url || 'default';
        cancelTokens.delete(requestKey);
        return response;
    },
    (error) => {
        // Handle cancellation
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
            return Promise.reject(error);
        }

        // Handle 401 errors
        if (error.response?.status === 401) {
            console.error('Unauthorized! Redirecting to login...');
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }

        // Clean up cancel token on error
        const requestKey = error.config?.url || 'default';
        cancelTokens.delete(requestKey);

        return Promise.reject(error);
    }
);

// Function to cancel a specific request
export const cancelRequest = (requestKey: string) => {
    const source = cancelTokens.get(requestKey);
    if (source) {
        source.cancel(`Request ${requestKey} canceled by the user`);
        cancelTokens.delete(requestKey);
    }
};

// Function to cancel all requests
export const cancelAllRequests = () => {
    cancelTokens.forEach((source, key) => {
        source.cancel(`Request ${key} canceled`);
        cancelTokens.delete(key);
    });
};

export default api;
```
- Modify the service as follows:
```ts
import api, { cancelRequest } from './api';
import { User } from '../types/user';
import { CancelToken } from 'axios';

export const fetchUserData = async (cancelToken?: CancelToken): Promise<User> => {
  try {
    const response = await api.get<User>('/users/me', { cancelToken });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      throw new Error('Request canceled');
    }
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Optional: Function to cancel the user data request
export const cancelUserDataRequest = () => {
  cancelRequest('/users/me');
};
```
```ts
import React, { useState, useEffect } from 'react';
import { fetchUserData, cancelUserDataRequest } from '../api/userService';
import { User } from '../types/user';
import axios, { CancelTokenSource } from 'axios';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const getUserData = async () => {
      try {
        const userData = await fetchUserData(source.token);
        setUser(userData);
      } catch (err: any) {
        if (axios.isCancel(err)) {
          console.log('User data request was canceled');
        } else {
          setError('Failed to load user data');
        }
      } finally {
        setLoading(false);
      }
    };

    getUserData();

    // Cleanup: Cancel request on component unmount
    return () => {
      source.cancel('UserProfile component unmounted');
    };
  }, []);

  const handleCancelRequest = () => {
    cancelUserDataRequest();
    setError('Request manually canceled');
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleCancelRequest}>Cancel Request</button>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default UserProfile;
```

### Using async-await to getAllProducts
```ts
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
```

## Global State Management in React
- It is used to avoid prop drilling
- We will have a centralized location to store state
- We make use of **Context API**
- It is a way to pass data throughout the component tree without passing it through the apps
- We can make this information available in any component
- For e.g the Login Component(Welcome, User)
- Context API provides a way to pass data through the component tree without having props passed from one component to another
- It eliminates problem of Prop Drilling
- State management with useContext and a Provider in React lets you share global state (like user data) across components without prop drilling. 
- useContext accesses the context value, and a Provider supplies it to child components.
- Create Context(UserContext.tsx)
- ![img_9.png](img_9.png)
- ![img_10.png](img_10.png)
- ![img_11.png](img_11.png)
```ts
import { createContext, useContext, ReactNode, useState } from 'react';

// User type
interface User {
  id: string;
  name: string;
}

// Context value type
interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Create context
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook for safe access
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be inside UserProvider');
  return context;
};

// Provider component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
```
- Consume Context
```ts
import { useUser } from './UserContext';

function AuthComponent() {
  const { user, login, logout } = useUser();

  const handleLogin = () => login({ id: '1', name: 'John Doe' });

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default AuthComponent;
```
- Wrap App(App.tsx)
```ts
import { UserProvider } from './UserContext';
import AuthComponent from './AuthComponent';

function App() {
  return (
    <UserProvider>
      <h1>Auth App</h1>
      <AuthComponent />
    </UserProvider>
  );
}

export default App;
```
- Context: UserContext holds the state (user, login, logout).
- Provider: UserProvider manages state with useState and provides it to children.
- Consumer: AuthComponent uses useUser to access and update the state.
- We can extend this by saving this user inside session storage like this
```ts
function setAuthUser(user){
    sessionStorage.setItem("authUser", JSON.stringify(user));
}

function getUser(){
    let currentUser = null
    if(sessionStorage["authUser"] !==  null){
        currentUser = JSON.parse(sessionStorage.getItem("authUser"));
    }
    return currentUser;
}

function removeAuthUser(){
    sessionStorage.removeItem("authUser");
}

const AuthService = {
    setAuthUser,getUser,removeAuthUser
}

export default AuthService
```
- We can also wrap our Browser Router with this UserContext Provider inside Layout.tsx
```ts
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import Navbar from "./Navbar.tsx";
import Products from "./Products.tsx";
import Login from "./Login.tsx";
import UserProvider from "../context/UserProvider.tsx";

function Layout() {

    const Databinding = lazy(()=> import('../src/Databinding.tsx'))
    const DiscountOffer = lazy(()=> import('./DiscountOffer.tsx'))
    const Search = lazy(()=> import('./Search.tsx'))
    const ProductView = lazy(()=> import('./ProductView.tsx'))
    const UncontrolledForm = lazy(()=> import('./UncontrolledForm.tsx'))
    const ControlledForm = lazy(()=> import('./ControlledForm.tsx'))
    const FormikForm = lazy(()=> import('./FormikForm.tsx'))
    return (
        <>
          <BrowserRouter>
              <UserProvider>
              <Navbar/>
              <Suspense fallback={(<div>Loading...</div>)}>
              <Routes>
                  <Route path="/" element={<Search/>} />
                  <Route path="/products" element={<Search/>} />
                  <Route path="/offer" element={<DiscountOffer/>} />
                  <Route path="/databinding" element={<Databinding/>} />
                  <Route path="*" element={<Databinding/>} />
                  <Route path="/product-view/:id" element={<ProductView/>} />
                  <Route path="/uncontrolled" element={<UncontrolledForm/>} />
                  <Route path="/controlled" element={<ControlledForm/>} />
                  <Route path="/formik" element={<FormikForm/>} />
                  <Route path="/productsApi" element={<Products/>} />
                  <Route path="/login" element={<Login/>} />
              </Routes>
              </Suspense>
              </UserProvider>
          </BrowserRouter>
        </>
    )
}

export default Layout

```
# Understanding React Class Components

## Introduction

React class components are a fundamental way to create components in React, particularly before the introduction of functional components with hooks in React 16.8. Class components are ES6 classes that extend `React.Component` or `React.PureComponent` and are used to manage state, handle lifecycle methods, and render UI. They are still widely used in legacy codebases and certain scenarios requiring complex lifecycle management.

### Key Features of Class Components

- **State Management**: Class components can hold and manage local state using `this.state` and `this.setState`.
- **Lifecycle Methods**: They provide methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for handling side effects.
- **Instance Methods**: You can define custom methods within the class for handling events or logic.
- **TypeScript Support**: In TypeScript, class components require explicit type definitions for props and state.

### When to Use Class Components

- Maintaining legacy React applications.
- Needing complex lifecycle methods not easily replicated with hooks.
- Preference for class-based syntax in specific projects.

> **Note**: Functional components with hooks are now preferred for new React projects due to their simplicity and conciseness.

## Example: Class Component in TypeScript

Below is an example of a React class component written in TypeScript (`.tsx`). This component demonstrates state management, event handling, refs, and destructuring state, addressing common use cases like the one you encountered with `const { fullName, address } = this.state;`.

### Prerequisites

- Node.js and npm/yarn installed.
- A React project with TypeScript configured.
- Install required dependencies:
  ```bash
  npm install react react-dom @types/react @types/react-dom
  ```

### Code Example

Create a file named `DataBinding   `DataBindingClass.tsx`:

```tsx
import { Component } from "react";

// Define interfaces for props and state
interface DataBindingProps {}
interface DataBindingState {
  fullName: string;
  firstName: string;
  address: string;
}

class DataBindingClass extends Component<DataBindingProps, DataBindingState> {
  private addressRef: React.RefObject<HTMLInputElement>;

  constructor(props: DataBindingProps) {
    super(props);
    this.state = {
      fullName: "Nishant Taneja",
      firstName: "Nishant",
      address: "",
    };

    this.addressRef = React.createRef<HTMLInputElement>();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ address: event.target.value });
  }

  handleClick(event: React.MouseEvent<HTMLInputElement>) {
    console.log("Button clicked!", this.state);
  }

  render() {
    const { fullName, address } = this.state;
    const name = "Test";

    return (
      <div>
        <h5>This is my component</h5>
        <p>My name is {name}</p>
        <p>Full Name is {fullName}</p>
        <i>Full name is {fullName}</i>
        <input
          type="text"
          ref={this.addressRef}
          placeholder="Enter address"
        />
        <input
          type="text"
          value={address}
          onChange={this.handleTextChange}
          placeholder="Enter text"
        />
        <input
          type="button"
          value="Click me"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default DataBindingClass;
```

### Using the Component

In your main application file (e.g., `App.tsx`), import and render the component:

```tsx
import DataBindingClass from "./DataBindingClass";

function App() {
  return (
    <div>
      <DataBindingClass />
    </div>
  );
}

export default App;
```

### Explanation of the Code

1. **Interfaces**:
    - `DataBindingProps`: Defines the props (empty in this case).
    - `DataBindingState`: Types the state with `fullName`, `firstName`, and `address` as strings.

2. **Constructor**:
    - Initializes state with default values.
    - Creates a ref for the input using `React.createRef`.
    - Binds methods to ensure `this` refers to the component instance.

3. **Event Handlers**:
    - `handleTextChange`: Updates the `address` state when the input changes.
    - `handleClick`: Logs state to the console when the button is clicked.

4. **Render Method**:
    - Destructures `fullName` and `address` from `this.state` for easy access.
    - Renders a UI with static text, a controlled input, an uncontrolled input with a ref, and a button.

5. **TypeScript Specifics**:
    - Uses `React.RefObject<HTMLInputElement>` for the ref.
    - Types event handlers with `React.ChangeEvent` and `React.MouseEvent`.

### Running the Example

1. Ensure your `tsconfig.json` is configured for React:
   ```json
   {
     "compilerOptions": {
       "jsx": "react",
       "esModuleInterop": true,
       "strict": true
     }
   }
   ```

2. Start your development server:
   ```bash
   npm start
   ```

3. Open your browser to see the component rendered. You should see:
    - Text displaying `fullName` and a static `name`.
    - Two input fields: one for address (controlled) and one with a ref.
    - A button that logs state to the console when clicked.

## Lifecycle Methods

Class components shine with lifecycle methods. Here’s an example of adding `componentDidMount` to fetch data:

```tsx
componentDidMount() {
  console.log("Component mounted!");
  // Example: Fetch data
  // fetch("https://api.example.com/data")
  //   .then((res) => res.json())
  //   .then((data) => this.setState({ fullName: data.name }));
}
```

Common lifecycle methods:
- `componentDidMount`: Runs after the component is added to the DOM.
- `componentDidUpdate`: Runs after props or state changes.
- `componentWillUnmount`: Runs before the component is removed.

## Best Practices

- **Always bind methods** in the constructor or use arrow functions to avoid `this` issues.
- **Use interfaces** in TypeScript to type props and state.
- **Keep state minimal** to avoid unnecessary re-renders.
- **Use refs sparingly**; prefer controlled components for form inputs.
- **Test components** with tools like Jest and React Testing Library.

## Troubleshooting

- **Destructuring errors**: Ensure all state properties are defined in the state interface and initialized in the constructor.
- **TypeScript errors**: Verify `@types/react` and `@types/react-dom` are installed.
- **Rendering issues**: Check the console for errors and use React Developer Tools to inspect state and props.

## Further Reading

- [React Official Docs: Components and Props](https://reactjs.org/docs/components-and-props.html)
- [TypeScript with React](https://www.typescriptlang.org/docs/handbook/jsx.html)
- [React Lifecycle Methods](https://reactjs.org/docs/state-and-lifecycle.html)

This example should help you understand and implement React class components effectively in a TypeScript project.

### My example
```ts
import {Component} from "react";

class ProductListClass extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts : []
        }
    }
    //use Effect (() => {},[selectedCategory])
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {
        const {selectedCategory,myname, onNotify} = this.props;
        if(prevProps.selectedCategory !== selectedCategory){
            const filtered = selectedCategory ? products.filter(f =>f.category == selectedCategory) : products;
            this.setState({filteredProducts : filtered});
        }
    }

    //use Effect (() => {},[]) useEffect with blank array
    componentDidMount() {

    }
    // use Effect return syntax for cleanup
    componentWillUnmount() {
    }
}


import React, { Component } from "react";

// Define the interface for component state
interface DataBindingState {
    fullName: string;
    firstName: string;
    address: string;
}

// Define the interface for component props (empty if no props are used)
interface DataBindingProps {}

class DataBindingClass extends Component<DataBindingProps, DataBindingState> {
    constructor(props: DataBindingProps) {
        super(props);
        this.state = {
            fullName: "Nishant Taneja",
            firstName: "Nishant",
            address: "", // Ensure address is defined
        };

        // Bind methods
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        // Create ref with proper type
        this.addressRef = React.createRef<HTMLInputElement>();
    }

    // Define ref type
    private addressRef: React.RefObject<HTMLInputElement>;

    // Type the event for input change
    handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ address: event.target.value });
    }

    // Type the event for button click
    handleClick(event: React.MouseEvent<HTMLInputElement>) {
        console.log("Button clicked!", this.state);
    }

    render() {
        // Destructuring state with proper types
        const { fullName, address } = this.state;
        const name = "Test";

        return (
            <div>
                <h5>This is my component</h5>
        <p>My name is {name}</p>
        <p>Full Name is {fullName}</p>
        <i>Full name is {fullName}</i>
        <input
        type="text"
        ref={this.addressRef}
        placeholder="Enter address"
        />
        <input
            type="text"
        value={address}
        onChange={this.handleTextChange}
        placeholder="Enter text"
        />
        <input
            type="button"
        value="Click me"
        onClick={this.handleClick}
        />
        </div>
    );
    }
}

export default DataBindingClass;
```
### Context API
- Provides a way to pass data through the component tree without having props passed
- It eliminate the problem of props drilling
- This pattern is useful for managing global state related to user authentication and session management in a React application

#### Steps to implement Context API

- Use createContext() to define your context
  export const UserContext = createContext(null);

- Create a component "UserProvider" to provide the Context.

```js
export function UserProvider({children}){

  const [currentUser, setCurrentUser] = useState()

  return(
  <UserContext.Provider value={{currentUser}}>
  {children}
  </UserContext.Provider>
  )
  }
```
  
- Wrap Your App with the Provider in Layout.jsx or App.jsx
```js
  <UserProvider>
  <Navbar />
  <Suspense fallback={<div>Loading......</div>}>
  <Routes>
  <Route path="/databinding" element={<Databind />} />
  ....
  </UserProvider>
```
- Consume the context in child component using useContext() hook
```js
  const { currentUser} = useContext(UserContext);
```

### Functional Components vs Class Component

#### State Management:
- useState()
  -this.state & this.setState()

#### Lifecycle Management:
-useEffect(()=>{}, []), useEffect(()=>{}, [deps]), useEffect(()=>{ return ()=> {} }, [deps]),
-componentDidMount, componentDidUpdate componentWillUnmount

#### Refs:
-useRef()
-React.createRef()


## State Management using Redux
- Centralized way of managing global state in the Application
- Has a specific pattern that needs to be followed when we want to update some state
- Redux Toolkit internally uses ImmerJS library to modify immutable objects in a mutable way
- We have some specific terms: Action, Reducer, Store, Dispatcher
- ![img_12.png](img_12.png)
- ![img_13.png](img_13.png)
- ![img_14.png](img_14.png)
- 2 flavors of redux: React-Redux and Redux-Toolkit
```shell
npm install @reduxjs/toolkit
```
- Action: A javascript object that has a type and a payload
- FilterProduct, payload: {searchText:"search", category: "1"}
- Reducer: A function that receives the current state and an action as argument
- It can update the current state and create a new state
- It acts like an event listener which handles events based on action provided.
- Store: Maintains the current state of object
- Dispatcher: Store is having one method called as dispatch.
- Calling dispatch is the only way to pass the action to your store

# React Redux Toolkit Example

This is a complete example of a React application using Redux Toolkit to manage state. The app implements a simple counter feature to demonstrate the core concepts of Redux Toolkit, including store configuration, slices, and integration with React components. The project uses Tailwind CSS for styling and is structured to run in a browser via CDN-hosted dependencies.

## Project Overview
The application consists of:
- A counter feature with increment, decrement, and increment-by-amount actions.
- Redux Toolkit to manage the counter state.
- React components to display and interact with the counter.
- Tailwind CSS for responsive styling.

Below is the complete code for the project, with detailed comments explaining each step.

## File Structure
- `index.html`: The main HTML file containing the React app and Redux setup.
- No additional files are needed since we're using CDNs for dependencies.

## Complete Code

### index.html
This file sets up the React app, Redux store, and renders the counter component.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Redux Toolkit Counter</title>
  <!-- Tailwind CSS CDN for styling -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- React and ReactDOM CDNs -->
  <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
  <!-- Redux and Redux Toolkit CDNs -->
  <script src="https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/dist/redux-toolkit.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-redux@8.1.1/dist/react-redux.min.js"></script>
  <!-- Babel for JSX transformation -->
  <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.22.9/Babel.min.js"></script>
</head>
<body>
  <!-- Root element for React app -->
  <div id="root" class="min-h-screen bg-gray-100 flex items-center justify-center"></div>

  <script type="text/babel">
    // Step 1: Import necessary dependencies from CDNs
    const { createSlice, configureStore } = ReduxToolkit;
    const { Provider, useDispatch, useSelector } = ReactRedux;
    const { createRoot } = ReactDOM;
    const { useState } = React;

    // Step 2: Create a Redux slice for the counter feature
    // A slice combines reducers, actions, and initial state
    const counterSlice = createSlice({
      name: 'counter', // Name of the slice
      initialState: {
        value: 0 // Initial state of the counter
      },
      // Reducers define how state changes in response to actions
      reducers: {
        increment: (state) => {
          state.value += 1; // Mutate state directly (Immer handles immutability)
        },
        decrement: (state) => {
          state.value -= 1;
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload; // Payload is the amount to increment by
        }
      }
    });

    // Step 3: Export actions to dispatch from components
    const { increment, decrement, incrementByAmount } = counterSlice.actions;

    // Step 4: Configure the Redux store
    // The store holds the entire state tree of the app
    const store = configureStore({
      reducer: {
        counter: counterSlice.reducer // Add counter slice reducer to the store
      }
    });

    // Step 5: Create the Counter component
    const Counter = () => {
      // Use useSelector to access the counter value from the store
      const count = useSelector((state) => state.counter.value);
      // Use useDispatch to dispatch actions
      const dispatch = useDispatch();
      // Local state for the input field
      const [incrementAmount, setIncrementAmount] = useState('2');

      return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Redux Toolkit Counter</h1>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-l hover:bg-blue-600"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <span className="text-xl mx-4">{count}</span>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
              className="border p-2 rounded w-20 mr-2 text-center"
              placeholder="Amount"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
            >
              Add Amount
            </button>
          </div>
        </div>
      );
    };

    // Step 6: Create the App component
    // Wraps the Counter component with the Redux Provider
    const App = () => {
      return (
        <Provider store={store}>
          <Counter />
        </Provider>
      );
    };

    // Step 7: Render the app to the DOM
    const root = createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
```

## Explanation of Key Concepts

### 1. **Redux Toolkit**
- **What is it?**: Redux Toolkit is the official, recommended way to write Redux logic. It simplifies Redux setup by providing utilities like `createSlice` and `configureStore`.
- **Why use it?**: It reduces boilerplate, handles immutability with Immer, and includes best practices out of the box.
- **Key components**:
   - `createSlice`: Combines state, reducers, and actions into a single object.
   - `configureStore`: Sets up the Redux store with good defaults (e.g., Redux DevTools support).

### 2. **Counter Slice**
- The `counterSlice` defines:
   - **Initial state**: `{ value: 0 }`.
   - **Reducers**: Functions (`increment`, `decrement`, `incrementByAmount`) that specify how the state changes.
   - **Actions**: Automatically generated by `createSlice` and used to trigger state changes.

### 3. **Store Setup**
- The `configureStore` function creates a Redux store that holds the app's state.
- The store combines all slice reducers (in this case, just `counterSlice.reducer`).

### 4. **React-Redux Integration**
- **Provider**: Wraps the app to make the Redux store available to all components.
- **useSelector**: Retrieves state from the store (e.g., the counter value).
- **useDispatch**: Provides a dispatch function to send actions to the store.

### 5. **Counter Component**
- Displays the current count and provides buttons to modify it.
- Uses local state (`useState`) for the input field to demonstrate combining React state with Redux.
- Dispatches actions (`increment`, `decrement`, `incrementByAmount`) to update the Redux store.

### 6. **Styling with Tailwind CSS**
- Tailwind CSS is used via CDN for quick, responsive styling.
- Classes like `bg-blue-500`, `p-6`, and `rounded-lg` style the UI without writing custom CSS.

## How to Run
1. Save the `index.html` code above into a file named `index.html`.
2. Open the file in a web browser (no server required since all dependencies are CDN-based).
3. Interact with the counter:
   - Click "+" to increment the count.
   - Click "-" to decrement the count.
   - Enter a number and click "Add Amount" to increment by that amount.

## Notes
- **CDN Usage**: The app uses CDNs for React, Redux Toolkit, React-Redux, Tailwind CSS, and Babel to keep it self-contained.
- **Babel**: Transforms JSX into JavaScript in the browser using `type="text/babel"`.
- **Immutability**: Redux Toolkit uses Immer internally, allowing "mutable" syntax in reducers while ensuring immutability.
- **No Form Submission**: The app avoids `<form>` tags due to sandbox restrictions, using a button and input instead.

## Next Steps
- Add more features (e.g., reset button, async actions with `createAsyncThunk`).
- Explore Redux Toolkit's advanced features like middleware or RTK Query for API calls.
- Convert to a full project with Node.js and local dependencies for production
- ![img_15.png](img_15.png)
- ![img_16.png](img_16.png)
- Flow of Data in Redux
- ![img_19.png](img_19.png)
- ![img_17.png](img_17.png)
- Flow of Data in Zustand
- ![img_18.png](img_18.png)

# JWT Authentication and Route Protection in a React App with TypeScript

This guide explains how JSON Web Token (JWT) authentication works in a React application using TypeScript and demonstrates how to protect routes using `react-router-dom` to ensure only authenticated and authorized users can access specific pages. The code includes a fully functional React app with login, protected routes, and role-based authorization, written in TypeScript for type safety.

## Understanding JWT Authentication

**JWT Structure**:
- A JWT consists of three parts: **Header**, **Payload**, and **Signature**, encoded in Base64 and joined by dots (`.`).
    - **Header**: Specifies the algorithm (e.g., HS256) and token type (JWT).
    - **Payload**: Contains claims like user ID, roles, and expiration time (`exp`).
    - **Signature**: Verifies the token's integrity using a secret key.
- Example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

**Authentication Flow**:
1. User submits credentials (username/password) via a login form.
2. The server validates credentials, generates a JWT, and returns it.
3. The client stores the JWT (e.g., in `localStorage`).
4. For protected API calls, the JWT is included in the `Authorization` header as `Bearer <token>`.
5. The server verifies the JWT’s signature and checks its validity (e.g., not expired).
6. On the client, protected routes check for a valid JWT and, optionally, user roles.

**Route Protection**:
- Use `react-router-dom` to define routes.
- Create a `ProtectedRoute` component to check for a valid JWT and user roles.
- Redirect unauthenticated users to the login page and unauthorized users (e.g., non-admins) to an unauthorized page.

## Project Setup

This example uses:
- **React with TypeScript** using `react-router-dom` for routing.
- **Axios** for API calls with typed responses.
- **Context API** to manage authentication state with TypeScript interfaces.
- **localStorage** to store the JWT (for simplicity; use HTTP-only cookies in production for security).
- **Mock API** endpoints for demonstration (replace with your backend).

### Prerequisites
- Node.js installed.
- Run `npm create vite@latest my-jwt-app -- --template react-ts` to set up a React TypeScript project with Vite.
- Install dependencies: `npm install react-router-dom axios @types/react-router-dom`.

## Code Implementation

Below is the complete TypeScript code for a React app with JWT authentication and protected routes.

### 1. Project Structure
```
src/
├── components/
│   ├── Login.tsx
│   ├── Home.tsx
│   ├── Dashboard.tsx
│   ├── AdminDashboard.tsx
│   ├── Unauthorized.tsx
│   ├── ProtectedRoute.tsx
├── context/
│   ├── AuthContext.ts
├── App.tsx
├── main.tsx
├── index.css
├── types.ts
```

### 2. Type Definitions (`types.ts`)
Defines interfaces for the project.

```typescript
// src/types.ts
export interface User {
  id: string;
  role: 'user' | 'admin';
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}
```

### 3. Main Application (`App.tsx`)
Defines the routes and layout of the app.

```typescript
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Unauthorized from './components/Unauthorized';
import ProtectedRoute from './components/ProtectedRoute';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute requiredRole="user">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
```

### 4. Authentication Context (`AuthContext.ts`)
Manages authentication state with TypeScript types.

```typescript
// src/context/AuthContext.ts
import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('token');
    if (token) {
      // Mock decoding; in production, verify with backend
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ id: payload.sub, role: payload.role });
      } catch (e) {
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Replace with your API endpoint
      const response = await axios.post<{ token: string }>('https://your-api.com/login', {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUser({ id: payload.sub, role: payload.role });
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
```

### 5. Login Component (`Login.tsx`)
Handles user login with typed form inputs.

```typescript
// src/components/Login.tsx
import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../types';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { login } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login for demo (replace with actual API call)
    const mockToken =
      username === 'admin' && password === 'admin'
        ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        : username === 'user' && password === 'user'
        ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6InVzZXIifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        : null;

    if (mockToken) {
      localStorage.setItem('token', mockToken);
      const payload = JSON.parse(atob(mockToken.split('.')[1]));
      await login(username, password); // Simulates API call
      navigate(payload.role === 'admin' ? '/admin' : '/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter username (admin or user)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter password (admin or user)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
```

### 6. Protected Route Component (`ProtectedRoute.tsx`)
Ensures only authenticated and authorized users access specific routes.

```typescript
// src/components/ProtectedRoute.tsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AuthContextType } from '../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: 'user' | 'admin';
}

function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, loading } = useContext(AuthContext) as AuthContextType;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
```

### 7. Home Component (`Home.tsx`)
Public page accessible to all users.

```typescript
// src/components/Home.tsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
        <p className="mb-4">
          Please <Link to="/login" className="text-blue-500 hover:underline">log in</Link> to continue.
        </p>
      </div>
    </div>
  );
}

export default Home;
```

### 8. Dashboard Component (`Dashboard.tsx`)
Accessible to authenticated users (role: user or admin).

```typescript
// src/components/Dashboard.tsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../types';

function Dashboard() {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <p>Welcome, {user?.id} (Role: {user?.role})</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
```

### 9. Admin Dashboard Component (`AdminDashboard.tsx`)
Accessible only to users with the `admin` role.

```typescript
// src/components/AdminDashboard.tsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from '../types';

function AdminDashboard() {
  const { user, logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p>Welcome, {user?.id} (Role: {user?.role})</p>
        <p>This is an admin-only page.</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
```

### 10. Unauthorized Component (`Unauthorized.tsx`)
Displayed when a user lacks the required role.

```tsx
// src/components/Unauthorized.tsx
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Unauthorized</h2>
        <p>You do not have permission to access this page.</p>
        <p>
          <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Unauthorized;
```

### 11. CSS (`index.css`)
Basic styling using Tailwind CSS (included via CDN in `index.html`).

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 12. Entry Point (`main.tsx`)
Renders the app.

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 13. HTML Entry Point (`index.html`)
Includes React, React Router, Axios, and Tailwind CSS via CDNs.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JWT Auth React App (TypeScript)</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone@7.23.9/Babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## How to Run

1. **Set Up Project**:
    - Create a new React TypeScript project: `npm create vite@latest my-jwt-app -- --template react-ts`.
    - Navigate to the project: `cd my-jwt-app`.
    - Install dependencies: `npm install react-router-dom axios @types/react-router-dom`.

2. **Copy Files**:
    - Replace the contents of `src/` and `index.html` with the provided code.
    - Ensure the folder structure matches the one outlined, including `types.ts`.

3. **Run the App**:
    - Start the development server: `npm run dev`.
    - Open `http://localhost:5173` in your browser.

4. **Test the App**:
    - Use `username: admin, password: admin` to access the admin dashboard (`/admin`).
    - Use `username: user, password: user` to access the user dashboard (`/dashboard`).
    - Attempt to access `/admin` as a non-admin user to see the unauthorized page.

## Notes
- **Mock API**: The login component uses mock tokens for demonstration. Replace the mock logic in `Login.tsx` with an actual API call to your backend (e.g., `https://your-api.com/login`).
- **Security**: Storing JWTs in `localStorage` is used for simplicity. In production, use HTTP-only cookies to mitigate XSS attacks.
- **Token Validation**: The example decodes the JWT client-side for simplicity. In production, verify tokens server-side and use refresh tokens for better security.
- **Backend**: Ensure your backend generates JWTs with a payload containing `sub` (user ID) and `role` (e.g., `user` or `admin`).
- **TypeScript**: The code includes type safety for props, state, and context. Ensure your backend API response types match the defined interfaces.

## Example API Response
Your backend should return a JWT like:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Troubleshooting
- **CORS Issues**: Ensure your backend allows CORS for your frontend origin.
- **Token Expiration**: Handle expired tokens by implementing refresh tokens or redirecting to login.
- **Dependencies**: Ensure all CDNs are accessible or install dependencies locally via npm.
- **TypeScript Errors**: Verify that all types are correctly defined, especially for API responses and context.

This TypeScript implementation provides a secure, type-safe foundation for JWT authentication and route protection in a React app.

# JWT Authentication and ProtectedRoute Diagrams in a React App

This document provides diagrammatic representations of how JSON Web Token (JWT) authentication works in a React application and how the `ProtectedRoute` component ensures that only authenticated and authorized users can access specific routes. The diagrams are created using Mermaid.js and can be rendered in Markdown viewers that support Mermaid (e.g., GitHub, VS Code with plugins). Below, you'll find two flowcharts with explanations, based on the TypeScript implementation provided earlier.

## Diagram 1: JWT Authentication Flow

This flowchart illustrates the process of user authentication using JWT in a React app, including login, token storage, and authenticated API requests.

### Explanation
- **User Login**: The user submits credentials (username/password) via a login form.
- **Server Validation**: The server verifies the credentials and generates a JWT if valid.
- **Token Storage**: The client stores the JWT (e.g., in `localStorage`).
- **Authenticated Requests**: For subsequent API calls, the client includes the JWT in the `Authorization` header.
- **Server Verification**: The server validates the JWT's signature and checks its expiration.
- **Response**: The server returns the requested data if the JWT is valid, or an error if invalid.

### Mermaid Diagram
```mermaid
graph TD
    A[User enters username/password in Login Form] --> B[Client sends credentials to Server]
    B --> C{Server validates credentials}
    C -->|Valid| D[Server generates JWT]
    C -->|Invalid| E[Server returns error]
    D --> F[Client receives JWT]
    E --> G[Client displays error message]
    F --> H[Client stores JWT in localStorage]
    H --> I[User makes request to protected API]
    I --> J[Client includes JWT in Authorization header]
    J --> K{Server verifies JWT}
    K -->|Valid| L[Server processes request]
    K -->|Invalid/Expired| M[Server returns error]
    L --> N[Client receives response]
    M --> O[Client handles error, e.g., redirect to login]
```

## Diagram 2: ProtectedRoute Workflow

This flowchart shows how the `ProtectedRoute` component in a React app (using `react-router-dom`) checks for authentication and authorization to protect routes.

### Explanation
- **Route Access Attempt**: The user tries to access a protected route (e.g., `/dashboard` or `/admin`).
- **Loading Check**: The component checks if the authentication state is still loading (e.g., fetching token).
- **Authentication Check**: Verifies if a user is authenticated by checking for a valid JWT and user object.
- **Authorization Check**: If a specific role is required (e.g., `admin`), it checks if the user has the correct role.
- **Redirects**: Unauthenticated users are redirected to the login page, and unauthorized users are redirected to an unauthorized page.
- **Access Granted**: If all checks pass, the protected component (e.g., `Dashboard` or `AdminDashboard`) is rendered.

### Mermaid Diagram
```mermaid
graph TD
    A[User attempts to access protected route] --> B{Is auth state loading?}
    B -->|Yes| C[Show loading indicator]
    B -->|No| D{Is user authenticated?}
    D -->|No| E[Redirect to /login]
    D -->|Yes| F{Is specific role required?}
    F -->|No| G[Render protected component]
    F -->|Yes| H{Does user have required role?}
    H -->|Yes| G
    H -->|No| I[Redirect to /unauthorized]
```

## How to View Diagrams
- **Render Mermaid Diagrams**: Copy this Markdown file into a Mermaid-compatible viewer:
    - **GitHub**: Create a `.md` file in a GitHub repository; GitHub renders Mermaid diagrams natively.
    - **VS Code**: Use a Markdown preview extension with Mermaid support (e.g., "Markdown Preview Mermaid Support").
    - **Other Tools**: Use tools like Mermaid Live Editor (https://mermaid.live) by pasting the Mermaid code.
- **Code Reference**: These diagrams align with the TypeScript implementation provided in the earlier response. Refer to the `Login.tsx`, `AuthContext.ts`, and `ProtectedRoute.tsx` files for code details.

## Notes
- **JWT Security**: The diagrams assume JWTs are stored in `localStorage` for simplicity. In production, use HTTP-only cookies to prevent XSS attacks.
- **Backend Integration**: The authentication flow assumes a backend API that validates credentials and issues JWTs. Replace mock logic in `Login.tsx` with actual API calls.
- **ProtectedRoute**: The `ProtectedRoute` component uses the `AuthContext` to access the user’s authentication state and role, ensuring type-safe checks in TypeScript.

These diagrams provide a clear visual representation of the JWT authentication process and route protection mechanism in a React app.

## Using Axios Interceptors to include JWT token in the header for each request
```ts
import axios from "axios";
import {Config} from "./constants";
import AuthService from "../services/Auth.service";

const axiosClient = axios.create({
    baseURL: Config.BASE_URL,
    timeout: 5000,
    headers:{
        "Content-Type": "application/json"
    }

})

axiosClient.interceptors.request.use((config)=>{
    const user = AuthService.getUser()
    if(user){
        config.headers.Authorization = `Bearer ${user.token}`
    }
    return config;
},(error)=>{
    Promise.reject(error);
    console.log(error);
})

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful responses
        return response;
    },
    (error: AxiosError) => {
        // Handle errors
        if (error.response && error.response.status === 401) {
            // Ensure window is defined (for browser-only environments)
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);


export default axiosClient;
```
# React Optimizations

When a parent component renders in React, its child components (and their children) are re-rendered by default due to React's recursive rendering process. 
This happens even if the child components' props or state haven't changed. To display static information in the parent component without triggering child renders, you can use optimization techniques like memoization, conditional rendering, or state management. 
Below, I explain why this happens and provide solutions to achieve your goal.


## Why Child Components Re-render
- **React's Rendering Behavior**: When a parent component re-renders (e.g., due to state or prop changes), React re-evaluates the entire component tree, causing child components to render unless optimized.
- **Goal**: Prevent child components from rendering unnecessarily and display static content in the parent component.

## Solutions to Prevent Child Component Re-rendering

### 1. Use `React.memo` for Child Components
`React.memo` memoizes a functional component, preventing re-renders if props remain unchanged (via shallow comparison).

**Example**:
```typescript
import React, { memo } from 'react';

// Child Component
const ChildComponent = memo(({ data }: { data: string }) => {
  console.log('ChildComponent rendered');
  return <div>{data}</div>;
});

// Parent Component
const ParentComponent: React.FC = () => {
  console.log('ParentComponent rendered');
  const staticData = 'Static Information';
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{staticData}</h1>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ChildComponent data="Child Data" />
    </div>
  );
};

export default ParentComponent;
```

**How It Works**:
- `React.memo` ensures `ChildComponent` only re-renders if its `data` prop changes.
- When `ParentComponent` re-renders (e.g., due to `count` state change), `ChildComponent` skips rendering because `data` is static.
- **Console Output**: Logs `ParentComponent rendered` on each button click, but `ChildComponent rendered` only on initial render.

**When to Use**:
- Child components with stable props that don't need frequent updates.
- Ensure props are primitive or stabilized (see Solution 2 for complex props).

**Caveat**:
- For objects, arrays, or functions as props, use `useMemo` or `useCallback` to prevent new instances from triggering re-renders.

### 2. Use `useMemo` to Stabilize Props
If passing objects, arrays, or functions to child components, use `useMemo` to memoize them, as new instances can trigger re-renders even with `React.memo`.

**Example**:
```typescript
import React, { memo, useMemo } from 'react';

const ChildComponent = memo(({ config }: { config: { name: string } }) => {
  console.log('ChildComponent rendered');
  return <div>{config.name}</div>;
});

const ParentComponent: React.FC = () => {
  console.log('ParentComponent rendered');
  const [count, setCount] = React.useState(0);
  const config = useMemo(() => ({ name: 'Static Name' }), []);

  return (
    <div>
      <h1>Static Information</h1>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ChildComponent config={config} />
    </div>
  );
};

export default ParentComponent;
```

**How It Works**:
- `useMemo` creates a stable `config` object that doesn’t change on re-renders (empty dependency array `[]`).
- `ChildComponent` (with `memo`) skips re-rendering because `config` is stable.
- Only `ParentComponent` re-renders when `count` changes.

**When to Use**:
- Passing non-primitive props (objects, arrays) to memoized child components.
- Combine with `React.memo` for optimal performance.

### 3. Conditionally Render Child Components
To prevent child components from rendering at all, exclude them from the render tree using a conditional check.

**Example**:
```typescript
import React from 'react';

const ChildComponent: React.FC = () => {
  console.log('ChildComponent rendered');
  return <div>Child Content</div>;
};

const ParentComponent: React.FC = () => {
  console.log('ParentComponent rendered');
  const [count, setCount] = React.useState(0);
  const showChildren = false;

  return (
    <div>
      <h1>Static Information</h1>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      {showChildren && <ChildComponent />}
    </div>
  );
};

export default ParentComponent;
```

**How It Works**:
- `showChildren` is `false`, so `ChildComponent` is not included in the render tree.
- Only static content (`<h1>Static Information</h1>`) is rendered.
- Parent re-renders on `count` change, but no child components are involved.

**When to Use**:
- When you explicitly want to skip rendering child components entirely.
- Ideal for static parent content with optional child rendering.

# useCallback vs useMemo Hook in React

Both `useCallback` and `useMemo` are React hooks used to optimize performance by memoizing values or functions, preventing unnecessary re-renders. However, they serve different purposes.

## `useCallback` Hook
- **Purpose**: Memoizes a callback function to prevent it from being recreated on every render unless dependencies change.
- **Use Case**: When passing callbacks to child components to avoid unnecessary re-renders.
- **Syntax**: `const memoizedCallback = useCallback(() => {...}, [dependencies])`

### Example
```jsx
import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  // Memoized callback, only recreated if count changes
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, [count]);

  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

```

Explanation: handleClick is memoized with useCallback. 
The Child component doesn't re-render unnecessarily when count changes unless handleClick's dependencies change.

useMemo Hook
Purpose: Memoizes a computed value to avoid recalculating it on every render unless dependencies change.
Use Case: For expensive computations (e.g., filtering, sorting) to optimize performance.
Syntax: const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Memoized expensive computation
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return count * 1000; // Simulate expensive calculation
  }, [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>Other State: {otherState}</button>
    </div>
  );
}
```
Explanation: expensiveValue is recalculated only when count changes, not when otherState changes, preventing unnecessary computations.
- ![img_20.png](img_20.png)
### When to Use
- Use useCallback for functions passed as props to memoized components.
- Use useMemo for computationally expensive values or results.



# `useState` vs `useReducer` in React

Both `useState` and `useReducer` are React hooks used to manage state in functional components, but they differ in complexity, use cases, and how they handle state updates. Below is a concise comparison with examples.

## `useState` Hook
- **Purpose**: Manages simple state updates for independent values.
- **Use Case**: Best for local, straightforward state (e.g., form inputs, toggles).
- **Syntax**: `const [state, setState] = useState(initialState)`
- **Update**: Directly set new state with `setState`.

### Example
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- Explanation: useState manages a single count value. Updates are simple and direct.
## useReducer Hook
- Purpose: Manages complex state logic with a reducer function, ideal for multiple related state transitions.
- Use Case: Best for complex state objects or when state transitions depend on actions (e.g., forms with multiple fields, state machines).
- Syntax: const [state, dispatch] = useReducer(reducer, initialState)
- Update: Dispatch actions to a reducer, which determines the new state.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```
- ![img_21.png](img_21.png)

### When to Use
- Use useState: For simple, independent state updates (e.g., a single counter, form input).
- Use useReducer: For complex state with multiple related updates or when logic is better centralized in a reducer (e.g., managing a form with multiple fields).
- Hybrid Approach: You can combine them (e.g., use useState for simple fields, useReducer for complex form logic).
- Note: useReducer is more powerful but adds complexity. Use useState unless the state logic justifies useReducer.

# Error Boundaries in React

**Error Boundaries** are React components that catch JavaScript errors in their child component tree, preventing the entire app from crashing. They help display a fallback UI (e.g., an error message) when an error occurs.

## Key Points
- **Purpose**: Catch errors during rendering, lifecycle methods, or constructors in child components.
- **How It Works**: Uses special lifecycle methods (`componentDidCatch` or `static getDerivedStateFromError`) to handle errors.
- **Limitations**: Does not catch errors in event handlers, async code, or server-side rendering.

## Simple Example
```jsx
import React, { Component } from 'react';

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state to show fallback UI
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>; // Fallback UI
    }
    return this.props.children; // Render children if no error
  }
}

// Component that might throw an error
function BuggyComponent() {
  throw new Error('I crashed!');
  return <div>Never renders</div>;
}

// Using the Error Boundary
function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

```

### Explanation
- ErrorBoundary: Wraps BuggyComponent and catches any errors it throws.
- Fallback UI: If an error occurs, <h1>Something went wrong!</h1> is shown instead of crashing the app.
- Normal Case: If no error, BuggyComponent would render normally (if it didn’t throw).
- ![img_22.png](img_22.png)

### When to Use
- Wrap critical parts of your app (e.g., routes, major sections) to ensure errors don’t break the entire UI.
- Use for user-friendly error messages or logging errors to a service.
- Note: Only class components can be error boundaries. For functional components, use libraries like react-error-boundary.


