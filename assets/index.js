const fs = require('fs');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const roster = require('./lib/Inquiry');

//create Class for display cards which include their template

//array of employees to be used for display cards

const manCard =
`<div class="displaycard">
    <header>${this.name}</header>
    <li class="info">${this.id}</li>
    <li class="info">${this.email}</li>
    <li class="info">${this.offNum}</li>
</div>`;

function makeHtml() {
roster.forEach(Manager => 
    fs.writeFile('manager.html', manCard, (err) =>
    //logs errors if any occur
        err ? console.log(err) : console.log("Success!"))
)};

//display card html (and css)

/*
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
        </div>`
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
</body>`;

//writes README to new .md file
fs.writeFile('index.html', template, (err) =>
//logs errors if any occur
    err ? console.log(err) : console.log("Success!"))
*/
    module.exports = makeHtml();

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
        <p>${roster}</p>
    </section>
</body>`;
