const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        role = 'Intern';
    }
}

module.exports = Intern;