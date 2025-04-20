var a = 100;
let b = 200;

if(true)
{
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);

for(var i1 = 0; i1<3;i1++)
{
    console.log(i1);
}
console.log(i1);//will give output of 3

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


