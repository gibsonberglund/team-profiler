const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require("./Manager");
const Engineer = require('./Engineer');
const Intern = require('./Intern');
//const { makeHtml } = require('../index');

//array to contain all employees once created
const roster = [];
const cardArray = '';

var template =
`<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <style>
    header {
        text-align: center;
        background-color: rgb(67, 67, 148);
        padding: 10px;
    }
    
    header h2 {
        font-size: 24px;
    }

    header h3 {
        font-size: 18px;
        color: rgb(170, 52, 52)
    }

    .mainbody {
        display: flex;
        flex-flow: row wrap;
    }
    
    .displaycard {
        display: inline-block;
        margin: 15px;
        padding: 15px;
        text-align: left;
        font-size: 32px;
        background-color: rgb(137, 137, 137);
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgb(79, 79, 79);
    }
    
    .displaycard header {
        background-color: rgb(67, 67, 148);
        color: white;
    }
    
    .info {
        display: block;
        margin: 10px;
        padding: 10px;
        font-size: 18px;
    }
    </style>
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section class="mainbody">`


//concat this at the end
var tempEnd = 
`   </section>
</body>
</html>`;

//template = template.concat(tempEnd);


//console.log(template);


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
        choices: ['Manager', 'Engineer', 'Intern']
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
                    const manCard =
`
<div class="displaycard">
    <header>
    <h2>${manager.name}</h2>
    <h3>Manager</h3>
    </header>
    <li class="info">ID: ${manager.id}</li>
    <li class="info">Email: ${manager.email}</li>
    <li class="info">Office #: ${manager.officeNumber}</li>
</div>
`;
                    template = template.concat(manCard);
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
                                console.log(cardArray)
    //add end of html and print template
                                template = template.concat(tempEnd);
                                makeHtml();
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
                    roster.push(empEng);
                    console.log(roster);
                    const engCard =
`
<div class="displaycard">
    <header>
    <h2>${empEng.name}</h2>
    <h3>Engineer</h3>
    </header>
    <li class="info">ID: ${empEng.id}</li>
    <li class="info">Email: ${empEng.email}</li>
    <li class="info">Github username: ${empEng.github}</li>
</div>
`;
                    template = template.concat(engCard);
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
                               console.log(cardArray);
                               //print template  
                               template = template.concat(tempEnd); 
                                makeHtml();
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
                    roster.push(empInt);
                    console.log(roster);
                    const intCard =
`
<div class="displaycard">
    <header>
    <h2>${empInt.name}</h2>
    <h3>Intern</h3>
    </header>
    <li class="info">ID: ${empInt.id}</li>
    <li class="info">Email: ${empInt.email}</li>
    <li class="info">School: ${empInt.school}</li>
</div>
`;
                    template = template.concat(intCard);
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
                               console.log(cardArray);
                                template = template.concat(tempEnd);
                               makeHtml();
                           }
                       })
           })
        }
    })
};

function makeHtml() {
fs.writeFile('index.html', template, (err) =>
//logs errors if any occur
    err ? console.log(err) : console.log("Success!"))
};

askQs();

