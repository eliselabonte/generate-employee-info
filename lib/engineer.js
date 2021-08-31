const newEmployee = require('./newEmployee');

class Engineer extends newEmployee  {
    
    constructor (id, name, email, github)   {
        super(id, name, email);
        this.github = github    
    }

    getGithub() {
        return this.github
    }

    getJob()    {
        return 'engineer'
    }
};

module.exports = Engineer
