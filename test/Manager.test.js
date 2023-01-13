//Tests to write:
const Manager = require('../assets/lib/Manager');


//Manager test
describe('Manager', () => {
        it("should return an object containing an 'office number' property when called with the 'new' keyword", () => {
            const obj = new Manager('Frank', 123, 'frank@bub.com', 'A24');

            expect(obj).toEqual({name: 'Frank', id: 123, email: 'frank@bub.com', officeNumber: 'A24'});
    })
});
