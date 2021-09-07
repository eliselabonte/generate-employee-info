const inquirer = require('inquirer');
const fs = require('fs');

// import employee classes
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Company = require('./lib/company')

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

// generate stuff

// company name
// function companyTitle(answer)    {
//     let card = `<h1>${answer.company}</h1>`
//     return card;
// };

// employee type cards
function managerCard(answers) {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let officeNumber = answers.office;

    let card = 
        `<div class="employee manager">
            <h3>Manager</h3>
            <h4>${name}, ID: ${id} </h4>
            <p>Email:<a href="mailto:${email}">${email}</a>
            </p>
            <p>Office Number: ${officeNumber}</p>
        </div>`;

    return card;
}

function engineerCard(answers) {
    let name = answers.name;
    let email = answers.email;
    let id = answers.id;
    let gitHub = answers.github;

    let card = 
        `<div class="employee engineer">
            <h3>Engineer</h3>
            <h4>${name}, ID: ${id} </h4>
            <p>Email:<a href="mailto:${email}">${email}</a>
            </p>
            <p>GitHub: <a href="https://www.github.com/${gitHub}">${gitHub}</a></p>
        </div>`;

    return card;
}

function internCard(answers) {
    let name = answers.name;
    let id = answers.id;
    let email = answers.email;
    let schoolTitle = answers.school;
    let schoolWebsite = answers.schoolWebsite;
    
    let card = 
        `
        <div class="employee intern">
            <h3>Intern</h3>
            <h4>${name}, ID: ${id} </h4>
            <p>Email:<a href="mailto:${email}">${email}</a>
            </p>
            <p>University: <a href="${schoolWebsite}">${schoolTitle}</a></p>
        </div>`;

    return card;
}

// make the HTML
function generateHTML() {
    fs.readFile("./src/index.html", (err, data) => {
    if (err) {
        console.log(err);
    } 
    else {
        let newTeam = employeeList.toString().replace(",", "");
        let result = data.toString().replace("<figure></figure>", newTeam);
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

// cycle through questions for each type of employee until user selects 'no more employees'
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

                let newCard = managerCard(answers);
                employeeList.push(newCard);
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
                console.log(answers.github)
                job = answers.confirmNew;

                let newCard = engineerCard(answers);
                employeeList.push(newCard);
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

                let newCard = internCard(answers);
                employeeList.push(newCard);
                getTeam();
            });
            break;

        case 'no more employees':
            // wanted to add code to prompt for company name
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