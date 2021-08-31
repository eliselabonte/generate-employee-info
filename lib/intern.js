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
