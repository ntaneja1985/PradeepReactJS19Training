class Person {
    constructor(pid,pname) {
        this.personId = pid;
        this.name = pname;
    }

    showInfo(){
        console.log(`Id = ${this.personId}`);
        console.log(`Name = ${this.name}`);
    }
}

export default Person;
// let person = new Person(1001,'nishant');
// person.showInfo();