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