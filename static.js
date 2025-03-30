class Fruit {
    static generate(){
        console.log('Generate Fruits');

    }
}

let fruit = new Fruit();
Fruit.generate();


//----Reduce
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 10