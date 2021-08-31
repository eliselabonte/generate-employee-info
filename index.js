const inquirer = require('inquirer');
const fs = require('fs');

// import employee classes
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Company = require('./lib/company')

// html template import
// const htmlTemplate = require('./src/HTMLtemplate');


// default employee type is Engineer
let job = 'Engineer';
let userInputCompanyName = '';

// create empty list of employees
let employeeList = [];

// ask for company name once
// putting this on the back-burner for now
const companyName = {
    type: 'input',
    name: 'company',
    message: 'What is the name of your company?',
};

// question to be asked at the beginning and end of every new employee
const newEmployee =
{
    type: 'list',
    name: 'confirmNew',
    message: 'Would you like to add an employee?',
    choices: ['Manager', 'Engineer', 'Intern', 'no more employees']
};

// these questions are only asked based on the type of employee added
const jobBasedPrompts = [
    {
        type: 'input',
        name: 'office',
        message: `What is the Manager's office number?`
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the Engineer's github?`
    },
    {
        type: 'input',
        name: 'school',
        message: `What school does the intern attend?`
    },
    {
        type: 'input',
        name: 'schoolWebsite',
        message: `What is the intern's university website?`
    },
];

// these questions are asked for all employees
function employeePrompts(employee) {
    return (prompts = [
        {
            type: 'input',
            name: 'id',
            message: `What is the ${employee}'s employee ID?`
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the ${employee}'s name?`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${employee}'s email address?`
        },
    ]);
}

function generateHTML() {
    fs.readFile("./src/index.html", (err, data) => {
    if (err) {
        console.log(err);
    } 
    else {
        console.log(userInputCompanyName)
        let newTeam = employeeList.toString().replace(",", "");
        let result = data.toString().replace("<figure></figure>", newTeam).replace('COMPANY',           userInputCompanyName);
        fs.writeFile("./public/index.html", result, "utf8", function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully Generated Team!")
        }
        });
        fs.copyFile('./src/style.css', './public/style.css', (err) => {
        if (err) {
            console.log(err);
        }
        });
        }
    })
    
};

function generateCard(answers) {
    let employeeTitle = '';
    let employeeClass = '';
    let employeeSpecificTitle = '';
    let employeeSpecific = '';

    if (answers instanceof Manager)    {
        employeeTitle = 'Manager';
        employeeClass = 'manager';
        employeeSpecificTitle = 'Office Number';
        employeeSpecific = answers.office;
    }
    else if (answers instanceof Engineer)    {
        employeeTitle = 'Engineer';
        employeeClass = 'engineer';
        employeeSpecificTitle = 'GitHub';
        employeeSpecific = `<a href="https://www.github.com/${answer.github}">${answer.github}</a>`;
    }
    else if (answers instanceof Intern)    {
        employeeTitle = 'Intern';
        employeeClass = 'intern';
        employeeSpecificTitle = 'University';
        employeeSpecific = `<a href="${answers.schoolWebsite}">${answers.school}</a>`;
    }
    else {
        return
    }

    let card = 
        `<div class="row firstRow">
        <div class="employee ${employeeClass}">
            <h3>${employeeTitle}</h3>
            <h4>${answers.name}, ID: ${answers.id} </h4>
            <p>Email:<a href="mailto:${answers.email}">${answers.email}</a>
            </p>
            <p>${employeeSpecificTitle}: ${employeeSpecific}</p>
        </div>
        </div>`;

    return card;

};

function getTeam() {
    let questions = [];
    switch (job) {
        case 'Manager':
            managerPrompts = employeePrompts(job);
            questions = [...managerPrompts, jobBasedPrompts[0], newEmployee]
            inquirer.prompt(questions).then((answers) => {
                let manager = new Manager(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.office
                );
                job = answers.confirmNew;
                employeeList.push(generateCard(answers));
                getTeam();
            });
            break;

        case 'Engineer':
            engineerPrompts = employeePrompts(job);
            questions = [...engineerPrompts, jobBasedPrompts[1], newEmployee]
            inquirer.prompt(questions).then((answers) => {
                let engineer = new Engineer(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.github
                );
                console.log(answers)
                job = answers.confirmNew;
                employeeList.push(generateCard(answers));
                getTeam();
            });
            break;

        case 'Intern':
            internPrompts = employeePrompts(job);
            questions = [...internPrompts, jobBasedPrompts[2], jobBasedPrompts[3], newEmployee]
            inquirer.prompt(questions).then((answers) => {
                let intern = new Intern(
                    answers.id,
                    answers.name,
                    answers.email,
                    answers.school,
                    answers.schoolWebsite
                );
                job = answers.confirmNew;
                employeeList.push(generateCard(answers));
                getTeam();
            });
            break;

        case 'no more employees':
            // inquirer.prompt(companyName).then((answer) => {
            //     let company = answer.getItem(companyName);
            //     userInputCompanyName = company;
            //     console.log(userInputCompanyName)
            // });
            generateHTML();
            break;
    }
}


getTeam();

// UGH.
        // .then((userInput) => {

        //         console.log('all done, bitch', userInput)

        //     // const htmlPageContent = generateHTML(answers);

        //     // fs.writeFile('index.html', htmlPageContent, (err) =>
        //     //     err ? console.log(err) : console.log('Successfully created index.html!')
        //     // );
        //     })