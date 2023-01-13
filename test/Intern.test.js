//Tests to write:
const Intern = require('../assets/lib/Intern');


//Intern test
describe('Intern', () => {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const obj = new Intern('Wendell', 456, 'wendl@bub.com', 'U of State');

            expect(obj).toEqual({name: 'Wendell', id: 456, email: 'wendl@bub.com', school: 'U of State'});
    })
});
