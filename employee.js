import Person from './person.js'

export default class Employee {
    constructor(eid) {
    this.EmployeeId = eid;
    }

    showEmployeeInfo() {
        let person = new Person(101,'test person');
        person.personId = this.EmployeeId;
        person.showInfo();
    }
}

let employee = new Employee(402);
employee.showEmployeeInfo();