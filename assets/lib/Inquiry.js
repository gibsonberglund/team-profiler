const inquirer = require("inquirer");

const Employee = require('./Employee');
const Manager = require("./Manager");
const Engineer = require('./Engineer');
const Intern = require('./Intern');
/*
    getName() {
        inquirer
            .prompt([
                {type: 'input',
                message: 'Employee name: ',
                name: 'empName',
                }])
        
        .then(function(response) {
            this.name = response.empName
        })
        }
    

    getId() {
        inquirer
            .prompt(
                {type: 'input',
                message: 'Employee ID: ',
                name: 'empId',
                })
            .then(function(response) {
                this.id = response.empId
            })
    }

    getEmail() {
        inquirer
            .prompt(
                {type: 'input',
                message: 'Employee email: ',
                name: 'empEmail',
                })
            .then(function(response) {
                this.email = response.empEmail
            })
    }

};
    const emp = new Employee(response.empName, response.empId, response.empEmail);

    console.log(emp);

    }
    getId() {
        this.id = response.empId;
    }
    getEmail() {
        this.email = response.empEmail;
    }
    
};
*/
const roster = [];

function askQs() {
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
        message: 'What role does this employee have?',
        name: 'empRole',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish']
        },
])
    .then(function(response) {
        console.log(emp);
        if(response.empRole === 'Manager') {
            inquirer
                .prompt(
                    {type: 'input',
                    message: "What is the manager's office number?",
                    name: 'offNum',
                })
                .then(function(response) {
                    const manager = new Manager(response.offNum, response.empName, response.empId, response.empEmail);
                    console.log(manager);
                    roster.push(this.manager);
            })
        } else if (response.empRole === 'Engineer') {
            inquirer
                .prompt(
                    {type: 'input',
                    message: "What is the engineer's github username?",
                    name: 'github',
                })
                .then(function(response) {
                    const empEng = new Engineer(response.github, response.empName, response.empId, response.empEmail);
                    console.log(empEng);
                    roster.push(this.empEng);
            })
        } else if (response.empRole === 'Intern') {
            inquirer
                .prompt(
                    {type: 'input',
                    message: "What is the intern's school?",
                    name: 'school',
                })
                .then(function(response) {
                    const empInt = new Intern(response.school, response.empName, response.empId, response.empEmail);
                    console.log(empInt);
                    roster.push(this.empInt);
            })
        } else if (response.empRole === 'Finish') {
            console.log('done');
            console.log(roster);
        }
})
};
askQs();


//Employee class collects user info about name, id, email
//Ask for manager office number (first Employee is always manager)
//Ask user if they want to add an Engineer or an Intern or Finish
//If Engineer, ask for gitHub info
//If Intern, ask for school info
//If Finish, generate html

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
