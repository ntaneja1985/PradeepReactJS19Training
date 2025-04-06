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
