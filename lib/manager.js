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

module.exports = Manager;