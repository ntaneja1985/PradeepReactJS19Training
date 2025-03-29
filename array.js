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

function add(x,y,...remainingNumbers)
{
    let result =  x + y;
    for(let n of remainingNumbers)
    {
        result += n;
    }
    return result;
}

let result2 = add(1,2,3,4,5,6,7,8,9);
console.log(result2);


