const Engineerjs = require('../lib/engineer');

describe("newEngineer", () => {

    it("should create an object containing 'id', 'name', 'email' address, and 'github' account", () => {
        const newOne = new Engineerjs (0, "Elise", "emlabonte714@gmail.com", "eliselabonte");

        expect(newOne).toEqual(
            { id: 0, name: "Elise", email: "emlabonte714@gmail.com", github: "eliselabonte"});

    });

    it("should return github account and job title of 'Engineer", () => {
        const newOne = new Engineerjs (0, "Elise", "emlabonte714@gmail.com", "eliselabonte");

        const github = newOne.getGithub()
        const job = newOne.getJob()

        expect(github).toEqual("eliselabonte")
        expect(job).toEqual("Engineer")
    })
});