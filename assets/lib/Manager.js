const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber){
        super("Frank", 123, "frank@bub.com");

        this.officeNumber = officeNumber;
    }

    getRole() {
        role = "Manager";
    }
}

module.exports = Manager;