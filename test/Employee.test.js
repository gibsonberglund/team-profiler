//Tests to write:
const Employee = require('../assets/lib/Employee');


//Employee
describe('Employee', () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const obj = new Employee('Frank', 123, 'frank@bub.com');

            expect(obj.name).toEqual('Frank');
    })
});


//Engineer
//Intern
//Manager