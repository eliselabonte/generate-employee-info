const newEmployee = require("./newEmployee");

class Intern extends newEmployee{
    constructor(id, name, email, school, schoolWebsite) {
        super(id, name, email),
        this.school = school,
        this.schoolWebsite = schoolWebsite
    }

    getSchool() {
        return this.school
    }
    getSchoolWebsite() {
        return this.schoolWebsite
    }

    getJob()    {
        return 'Intern'
    }
};

module.exports = Intern;


// {
//     type: 'input',
//     name: 'internName',
//     message: 'What is the name of your Intern?',
//     when: function(answers) {
//         return answers.newEmployee === 'intern';
//     }
//     },
//     {
//     type: 'input',
//     name: 'internEmail',
//     message: 'What is the intern\'s email address?',
//     when: function(answers) {
//         return answers.newEmployee ===  'intern';
//     }
//     },
//     {
//     type: 'input',
//     name: 'internSchoolName',
//     message: 'What University does the intern attend?',
//     when: function(answers) {
//         return answers.newEmployee === 'intern';
//     }
//     },
//     {
//     type: 'input',
//     name: 'internSchoolSite',
//     message: 'Enter the University website.',
//     when: function(answers) {
//         return answers.newEmployee === 'intern';
//     }
//     },