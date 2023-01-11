const inquirer = require("inquirer");

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    /*
    getName() {
        this.name = response.empName;
    }
    getId() {
        this.id = response.empId;
    }
    getEmail() {
        this.email = response.empEmail;
    }
    */
};

inquirer
    .prompt([
        {type: 'input',
        message: 'Employee name: ',
        name: 'empName',
        },
        {type: 'input',
        message: 'Employee ID number: ',
        name: 'empId',
        },
        {type: 'input',
        message: 'Employee email address: ',
        name: 'empEmail',
        },
        {type: 'list',
        message: 'New team member?',
        name: 'newEmp',
        choices: ['Engineer', 'Intern', 'Finish']
        },
])
    .then(function(response) {
        const roster = [];
        const emp = new Employee(response.empName, response.empId, response.empEmail);
        roster.push(emp);
        console.log(emp);
        if (response.newEmp = 'Engineer') {
            return inquirer;
        } else if (response.newEmp = 'Finish') {
            console.log('done');
            console.log(roster);
        }
});


//When user chooses to add a new employee, call the function to fill in each piece of info
//save that as a new user

/*
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
*/
module.exports = Employee;