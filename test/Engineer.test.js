//Tests to write:
const Engineer = require('../assets/lib/Engineer');


//Engineer test
describe('Engineer', () => {
        it("should return an object containing an 'github' property when called with the 'new' keyword", () => {
            const obj = new Engineer('Rose', 321, 'rose@bub.com', 'rosegoes');

            expect(obj).toEqual({name: 'Rose', id: 321, email: 'rose@bub.com', github: 'rosegoes'});
    })
});
