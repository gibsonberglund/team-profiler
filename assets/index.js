const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
//const generateMarkdown = require('./utils/generateMarkdown.js');

//create Class for display cards which include their template

//array of employees to be used for display cards
const engArray = [];
const intArray = [];

//display card html (and css)
const manCard =
`<div class="displaycard">
    <header>${this.name}</header>
    <li class="info">${this.id}</li>
    <li class="info">${this.email}</li>
    <li class="info">${this.offNum}</li>
</div>`;

cardArray.push(manCard);


class EngCard {
    constructor(empEng) {
        this.empEng = empEng;
    }
}
engArray.forEach(empEng => {
    const engCard =
        `<div class="displaycard">
            <header>${this.name}</header>
            <li class="info">${this.id}</li>
            <li class="info">${this.email}</li>
            <li class="info">${this.gitHub}</li>
        </div>`;
    cardArray.push(engCard);

const intCard =
`<div class="displaycard">
    <header>${this.name}</header>
    <li class="info">${this.id}</li>
    <li class="info">${this.email}</li>
    <li class="info">${this.school}</li>
</div>`;

//for loop to make new instance of Display Card for each employee

//insert array of cards into html with template literal

//template of README that will be created
let template =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css">
    <title>My Team</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <section class="mainbody">
        ${cardArray}
    </section>
</body>`

//writes README to new .md file
fs.writeFile('index.html', template, (err) =>
//logs errors if any occur
    err ? console.log(err) : console.log("Success!"))


