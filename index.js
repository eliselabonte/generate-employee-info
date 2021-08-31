const inquirer = require('inquirer');
const fs = require('fs');

// these hoes are crazy if they think I'm about to write tests for this shit

const html = require('./src/HTMLtemplate');

const companyName = {
    type: 'input',
    name: 'companyName',
    message: 'What is the name of your company?',
    }
const newEmployee = [
    // repeat this question until 'no more new employees' is selected.
    {
    type: 'confirm',
    name: 'confirmNew',
    message: 'Would you like to add an employee? (hit ENTER for yes)',
    default: true,
    },
    {
    type: 'list',
    name: 'newEmployee',
    message: 'What type of employee?',
    choices: ['manager', 'engineer', 'intern'],
    default: 'engineer',
    },
]
    
const employeePrompts = [
    // MANAGER
    {
    type: 'input',
    name: 'managerName',
    message: 'What is the name of your manager?',
    when: function(answers) {
        return answers.newEmployee === 'manager';
    }
    },
    {
    type: 'input',
    name: 'managerEmail',
    message: 'What is the manager\'s email address?',
    when: function(answers) {
        return answers.newEmployee === 'manager';
    }
    },
    {
    type: 'input',
    name: 'managerOfficeNumber',
    message: 'What is the manager\'s office number?',
    when: function(answers) {
        return answers.newEmployee === 'manager';
    }
    },

    // ENGINEER
    {
    type: 'input',
    name: 'engineerName',
    message: 'What is the name of your Engineer?',
    when: function(answers) {
        return answers.newEmployee === 'engineer';
    }
    },
    {
    type: 'input',
    name: 'engineerEmail',
    message: 'What is the Engineer\'s email address?',
    when: function(answers) {
        return answers.newEmployee === 'engineer';
    }
    },
    {
    type: 'input',
    name: 'engineergitHub',
    message: 'Enter the Engineer\'s GitHub username.',
    when: function(answers) {
        return answers.newEmployee === 'engineer';
    }
    },

    // INTERN
    {
    type: 'input',
    name: 'internName',
    message: 'What is the name of your Intern?',
    when: function(answers) {
        return answers.newEmployee === 'intern';
    }
    },
    {
    type: 'input',
    name: 'internEmail',
    message: 'What is the intern\'s email address?',
    when: function(answers) {
        return answers.newEmployee ===  'intern';
    }
    },
    {
    type: 'input',
    name: 'internSchoolName',
    message: 'What University does the intern attend?',
    when: function(answers) {
        return answers.newEmployee === 'intern';
    }
    },
    {
    type: 'input',
    name: 'internSchoolSite',
    message: 'Enter the University website.',
    when: function(answers) {
        return answers.newEmployee === 'intern';
    }
    },
];

function generateHTML(newEmployee, ...answers) {
        inquirer.prompt(companyName).prompt()
        .then((userInput) => {

            //         console.log('all done, bitch', userInput)
    
            //     // const htmlPageContent = generateHTML(answers);
    
            //     // fs.writeFile('index.html', htmlPageContent, (err) =>
            //     //     err ? console.log(err) : console.log('Successfully created index.html!')
            //     // );
            //     });
        
        // store responses in a string as they come in
        const finalAnswers = [...inputs, answers];
        // this determines if the prompts are over or not based on the user's answer to the repeated question
        // (also I have to figure out how to tell it which question to repeat)
        const endPrompts = (newEmployee === 'no more new employees')
        console.log({endPrompts, newEmployee});

        // if the prompts aren't done, keep storing answers. if the prompts are done, collect all answers
        return endPrompts ? finalAnswers : getInputs(finalAnswers);
        })};

function ask()  {
    // if companyName exists, then prompt the newEmployee
    inquirer.prompt(companyName)
    
    if (companyName)    {
        inquirer.prompt(newEmployee)
        ask()
    }
    if (newEmployee.confirmNew)    {
        inquirer.prompt(employeePrompts),
        ask()
    }
    else (
        generateHTML()
    )

    // repeat the below code until done
        // if newEmployee is anything but 'no new employee' then prompt companyPrompts
        // prompt newEmployee
}

ask();


// UGH.
        // .then((userInput) => {

        //         console.log('all done, bitch', userInput)

        //     // const htmlPageContent = generateHTML(answers);

        //     // fs.writeFile('index.html', htmlPageContent, (err) =>
        //     //     err ? console.log(err) : console.log('Successfully created index.html!')
        //     // );
        //     })