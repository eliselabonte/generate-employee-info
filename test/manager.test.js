const Managerjs = require('../lib/manager');

describe("newmanager", () => {

    it("should create an object containing id, name, email address, and office number", () => {
        const newOne = new Managerjs (0, "Elise", "emlabonte714@gmail.com", "55");

        expect(newOne).toEqual(
            { id: 0, name: "Elise", email: "emlabonte714@gmail.com", office: "55"});

    });

    it("should return office number and job title of 'Manager", () => {
        const newOne = new Managerjs (0, "Elise", "emlabonte714@gmail.com", "55");

        const officeNumber = newOne.getOffice()
        const job = newOne.getJob()

        expect(officeNumber).toEqual("55")
        expect(job).toEqual("manager")
    })
});