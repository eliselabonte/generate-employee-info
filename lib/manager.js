const newEmployee = require("./newEmployee");

class Manager extends newEmployee   {
    constructor(id, name, email, office)    {
        super(id, name, email),
        this.office = office
    }

    getOffice() {
        return this.office
    }

    getJob()    {
        return 'Manager'
    }
};

module.exports = Manager



// {
//     type: 'input',
//     name: 'managerName',
//     message: 'What is the name of your manager?',
//     when: function(answers) {
//         return answers.newEmployee === 'manager';
//     }
//     },
//     {
//     type: 'input',
//     name: 'managerEmail',
//     message: 'What is the manager\'s email address?',
//     when: function(answers) {
//         return answers.newEmployee === 'manager';
//     }
//     },
//     {
//     type: 'input',
//     name: 'managerOfficeNumber',
//     message: 'What is the manager\'s office number?',
//     when: function(answers) {
//         return answers.newEmployee === 'manager';
//     }
//     },