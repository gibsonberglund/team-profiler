//Tests to write:
const Employee = require('../assets/lib/Employee');


//Employee
describe('Employee', () => {
        it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
            const obj = new Employee('Frank', 123, 'frank@bub.com');

            expect(obj).toEqual({name: 'Frank', id: 123, email: 'frank@bub.com'});
    })
});


//Engineer
//Intern
//Manager