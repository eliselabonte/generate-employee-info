const inquirer = require('inquirer');
const fs = require('fs');

const html = require('./src/HTMLtemplate');

inquirer
    .prompt([
        {
        type: 'input',
        name: 'companyName',
        message: 'What is the name of your company?',
        },
        {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of your manager?',
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the manager\'s email address?',
        },
        {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the manager\'s office number?',
        },
        {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your Engineer?',
        },
        {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the Engineer\'s email address?',
        },
        {
        type: 'input',
        name: 'engineergitHub',
        message: 'Enter the Engineer\'s GitHub username.',
        },
        {
        type: 'input',
        name: 'internName',
        message: 'What is the name of your Intern?',
        },
        {
        type: 'input',
        name: 'internEmail',
        message: 'What is the intern\'s email address?',
        },
        {
        type: 'input',
        name: 'internSchoolName',
        message: 'What University does the intern attend?',
        },
            
        {
        type: 'input',
        name: 'internSchoolSite',
        message: 'Enter the University website.',
        },
    ])
    .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
    });