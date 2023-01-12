const inquirer = require("inquirer");

const Employee = require('./Employee');
const Manager = require("./Manager");
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const roster = [];

//contains all questions
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
//if user chooses manager
        const emp = new Employee(response.empName, response.empId, response.empEmail);
        console.log(emp);
        if(response.empRole === 'Manager') {
    //create employee variable and export to other modules
            module.exports = emp;
    //ask additional question
            inquirer
                .prompt(
                    {type: 'input',
                    message: "What is the manager's office number?",
                    name: 'offNum',
                })
                .then(function(response) {
    //create manager variable and add to roster
                    const manager = new Manager(emp.name, emp.id, emp.email, response.offNum);
                    console.log(manager);
                    roster.push(manager);
                    console.log(roster);
    //ask user if they want to create a new employee
                    inquirer
                        .prompt(
                            {type: 'list',
                            message: "Add another employee?",
                            name: 'addNewEmp',
                            choices: ["Yes", "Finish"],
                        })
                        .then(function(response) {
    //if yes, then restart askQs
                            if(response.addNewEmp === "Yes") {
                                console.log(roster);
                                askQs();
    //if no, print template
                            } else if (response.addNewEmp === "Finish") {
                                console.log(roster)
                                //print template
                            }
                        })
            })
        } else if (response.empRole === 'Engineer') {
            inquirer
                .prompt(
                    {type: 'input',
                    message: "What is the engineer's github username?",
                    name: 'github',
                })
                .then(function(response) {
                    const empEng = new Engineer(emp.name, emp.id, emp.email, response.github);
                    console.log(empEng);
                    roster.push(empEng);
                    console.log(roster);
    //ask user if they want to create a new employee
                       inquirer
                       .prompt(
                           {type: 'list',
                           message: "Add another employee?",
                           name: 'addNewEmp',
                           choices: ["Yes", "Finish"],
                       })
                       .then(function(response) {
   //if yes, then restart askQs
                           if(response.addNewEmp === "Yes") {
                               console.log(roster);
                               askQs();
   //if no, print template
                           } else if (response.addNewEmp === "Finish") {
                               console.log(roster)
                               //print template
                           }
                       })
           })
        } else if (response.empRole === 'Intern') {
            inquirer
                .prompt(
                    {type: 'input',
                    message: "What is the intern's school?",
                    name: 'school',
                })
                .then(function(response) {
                    const empInt = new Intern(emp.name, emp.id, emp.email, response.school);
                    console.log(empInt);
                    roster.push(empInt);
                    console.log(roster);
    //ask user if they want to create a new employee
                       inquirer
                       .prompt(
                           {type: 'list',
                           message: "Add another employee?",
                           name: 'addNewEmp',
                           choices: ["Yes", "Finish"],
                       })
                       .then(function(response) {
   //if yes, then restart askQs
                           if(response.addNewEmp === "Yes") {
                               console.log(roster);
                               askQs();
   //if no, print template
                           } else if (response.addNewEmp === "Finish") {
                               console.log(roster)
                               //print template
                           }
                       })
           })
        } else if (response.empRole === 'Finish') {
            console.log('done');
            console.log(roster);
        }
})
};
askQs();

//If Finish, generate html
