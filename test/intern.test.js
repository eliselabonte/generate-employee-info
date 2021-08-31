const Internjs = require('../lib/intern');

describe("newintern", () => {

    it("should create an object containing id, name, email address, university, and university link", () => {
        const newOne = new Internjs (0, "Elise", "emlabonte714@gmail.com", "Massachusetts Maritime Academy", "maritime.edu");

        expect(newOne).toEqual(
            { id: 0, name: "Elise", email: "emlabonte714@gmail.com", school: "Massachusetts Maritime Academy", schoolWebsite: "maritime.edu"});

    });

    it("should return the school, school website and job title of 'Intern", () => {
        const newOne = new Internjs (0, "Elise", "emlabonte714@gmail.com", "Massachusetts Maritime Academy", "maritime.edu");

        const school = newOne.getschool();
        const schoolWebsite = newOne.getSchoolWebsite();
        const job = newOne.getJob();

        expect(school).toEqual("Massachusetts Maritime Academy");
        expect(schoolWebsite).toEqual("maritime.edu");
        expect(job).toEqual("intern");
    })
});