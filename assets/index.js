//import all modules
const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//html template, minus the ending
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


//concat this to end of html once the user selects 'finish'
var tempEnd = 
`   </section>
</body>
</html>`;


//inquirer function with all user questions
function askQs() {
//basic questions for all employees
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
    //create manager variable
                    const manager = new Manager(emp.name, emp.id, emp.email, response.offNum);
    //create html section for this manager
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
    //add html section to main html template
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
                                askQs();
                            } else if (response.addNewEmp === "Finish") {
    //if no, add end of html and print template
                                template = template.concat(tempEnd);
                                makeHtml();
                            }
                        })
            })
    //if user chooses engineer
        } else if (response.empRole === 'Engineer') {
            inquirer
    //ask for engineer's github username
                .prompt(
                    {type: 'input',
                    message: "What is the engineer's github username?",
                    name: 'github',
                })
                .then(function(response) {
    //create variable for this engineer
                    const empEng = new Engineer(emp.name, emp.id, emp.email, response.github);
    //create html section for this engineer
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
    //add html section to main html template
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
                               askQs();
   //if no, add end of html and print
                           } else if (response.addNewEmp === "Finish") {
                               //print template  
                               template = template.concat(tempEnd); 
                                makeHtml();
                           }
                       })
           })
    //if user selects intern
        } else if (response.empRole === 'Intern') {
            inquirer
    //ask for intern's school
                .prompt(
                    {type: 'input',
                    message: "What is the intern's school?",
                    name: 'school',
                })
                .then(function(response) {
    //create variable for this intern
                    const empInt = new Intern(emp.name, emp.id, emp.email, response.school);
    //create html section for this intern
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
    //add html section to main html template
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
                               askQs();
   //if no, add end of html and print template
                           } else if (response.addNewEmp === "Finish") {
                                template = template.concat(tempEnd);
                               makeHtml();
                           }
                       })
           })
        }
    })
};

//function to print template
function makeHtml() {
    fs.writeFile('index.html', template, (err) =>
//logs errors if any occur
    err ? console.log(err) : console.log("Success!"))
};

//calls Inquirer function
askQs();

