const { default: inquirer } = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
/*
    getName() {
        inquirer
            .prompt(
                {type: 'input',
                message: 'Employee name: ',
                qName: empName,
                }
            )
            const employ = response.qName;
            console.log(employ);
    }
*/
    getId() {
        inquirer
            .prompt(
                {type: 'input',
                message: 'Employee ID number: ',
                qName: empId,
                }
            )
    }

    getEmail() {
        inquirer
            .prompt(
                {type: 'input',
                message: 'Employee email address: ',
                qName: empEmail,
                }
            )
    }

    getRole() {
        console.log('Employee')
    }
}

module.exports = Employee;