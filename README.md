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
- npm create vite@latest myapp --template react
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






