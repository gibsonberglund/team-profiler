const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require("./Manager");
const Engineer = require('./Engineer');
const Intern = require('./Intern');
//const { makeHtml } = require('../index');

//array to contain all employees once created
const roster = [];
const cardArray = [];

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
`<div class="displaycard">
    <header>${manager.name}</header>
    <li class="info">${manager.id}</li>
    <li class="info">${manager.email}</li>
    <li class="info">${manager.officeNumber}</li>
</div>`;
                    cardArray.push(manCard);
                    console.log(cardArray);
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
                                //print template;
                                //makeHtml(cardArray);
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
`<div class="displaycard">
    <header>${empEng.name}</header>
    <li class="info">${empEng.id}</li>
    <li class="info">${empEng.email}</li>
    <li class="info">${empEng.github}</li>
</div>`;
                    cardArray.push(engCard);
                    console.log(cardArray);
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
                                //makeHtml();
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
`<div class="displaycard">
    <header>${empInt.name}</header>
    <li class="info">${empInt.id}</li>
    <li class="info">${empInt.email}</li>
    <li class="info">${empInt.school}</li>
</div>`;
                    cardArray.push(intCard);
                    console.log(cardArray); 
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
                               //makeHtml();
                           }
                       })
           })
        }
    })
};

let template =
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <style>
    .body {
        display: flex;
        flex-flow: row wrap;
    }
    
    .displaycard {
        display: inline-block;
        margin: 20px;
        padding: 15px;
        text-align: left;
        font-size: 32px;
    }
    
    .displaycard.header {
        background-color: rgb(67, 67, 148);
        color: white;
    }
    
    .info {
        display: block;
        margin: 10px;
        padding: 10px;
        font-size: 14px;
    }
    </style>
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section class="mainbody">
        ${cardArray}
    </section>
</body>`;

function makeHtml() {
fs.writeFile('index.html', template, (err) =>
//logs errors if any occur
    err ? console.log(err) : console.log("Success!"))
};

askQs();

//If Finish, generate html
