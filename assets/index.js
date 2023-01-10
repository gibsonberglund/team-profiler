const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown.js');


// Array of questions that will appear in command line
inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of your application?",
            name: 'Q1',
        },
        {
            type: 'input',
            message: "Describe the function of your application, and the problem it solves for the user.",
            name: 'Q2',
        },
        {
            type: 'input',
            message: "How does the user install your application?",
            name: 'Q3',
        },
        {
            type: 'input',
            message: "Explain how to use your application.",
            name: 'Q4',
        },
        {
            type: 'input',
            message: `Choose a license from the following list:
            Apache
            MIT
            BSD
            Boost Software
            Creative Commons
            Eclipse Public
            GNU General Public
            Mozilla Public
            The Unlicense
            `,
            name: 'Q5',
        },
        {
            type: 'input',
            message: "Who helped you build this application?",
            name: 'Q6',
        },
        {
            type: 'input',
            message: "How does the user test this application?",
            name: 'Q7',
        },
        {
            type: 'input',
            message: "What is your Github URL?",
            name: 'Q8',
        },
        {
            type: 'input',
            message: "What is your email address?",
            name: 'Q9',
        },
    ])

//once all questions are answered...
    .then((response) => {
        //choose license badge and link based on user choice
        let badge
        let badgeLink
        if (response.Q5 === "Apache") {
            badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
            badgeLink = 'https://opensource.org/licenses/Apache-2.0';
        } else if (response.Q5 === "MIT") {
            badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
            badgeLink = 'https://opensource.org/licenses/MIT';
        } else if (response.Q5 === "BSD") {
            badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
            badgeLink = 'https://opensource.org/licenses/BSD-3-Clause';
        } else if (response.Q5 === "Boost Software") {
            badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
            badgeLink = 'https://www.boost.org/LICENSE_1_0.txt';
        } else if (response.Q5 === "Creative Commons") {
            badge = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
            badgeLink = 'http://creativecommons.org/publicdomain/zero/1.0/';
        } else if (response.Q5 ==="Eclipse Public") {
            badge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
            badgeLink = 'https://opensource.org/licenses/EPL-1.0';
        } else if (response.Q5 === "GNU General Public") {
            badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
            badgeLink = 'https://www.gnu.org/licenses/gpl-3.0';
        } else if (response.Q5 === "Mozilla Public") {
            badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
            badgeLink = 'https://opensource.org/licenses/MPL-2.0';
        } else if (response.Q5 === "The Unlicense") {
            badge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
            badgeLink = '[http://unlicense.org/](http://unlicense.org/)';
    //if no license is entered, no badge or link is provided
        } else {
            badge = ``
            badgeLink = ``
        };

    //template of README that will be created
        let template =
        `# ${response.Q1}
${badge}

## Description
        ${response.Q2}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Credits](#Credits)
[Tests](#Tests)
[Questions](#Questions)

## Installation
        ${response.Q3}

## Usage
        ${response.Q4}

## Credits
        ${response.Q6}

## License
        This application is covered under the ${response.Q5} License
        Click the link below to learn more about this license:
${badgeLink}

## Tests
        ${response.Q7}

## How To Contribute
        If you would like to make a contribution to this application,
        you can contact the creators at the Github URL or the email address provided in the following section.

## Questions
        If you have any questions about this application, you can find more info at my Github URL here: ${response.Q8}
        Or you can contact me directly at this email address: ${response.Q9}
    `
    //writes README to new .md file
        fs.writeFile('README.md', template, (err) =>
    //logs errors if any occur
        err ? console.log(err) : console.log("Success!"))
    });


