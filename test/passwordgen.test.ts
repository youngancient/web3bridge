// passwordGenerator.test.ts
const generatePassword = require("../src/passwordgen");

describe('generatePassword', () => {
    test('generates a password of the specified length', () => {
        const length = 10;
        const password = generatePassword(length, true, true, true, true);
        expect(password.length).toBe(length);
    });

    test('generates a password with uppercase letters', () => {
        const password = generatePassword(10, true, false, false, false);
        expect(password).toMatch(/[A-Z]/);
    });

    test('generates a password with lowercase letters', () => {
        const password = generatePassword(10, false, true, false, false);
        expect(password).toMatch(/[a-z]/);
    });

    test('generates a password with numbers', () => {
        const password = generatePassword(10, false, false, true, false);
        expect(password).toMatch(/[0-9]/);
    });

    test('generates a password with special characters', () => {
        const password = generatePassword(10, false, false, false, true);
        expect(password).toMatch(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/);
    });

    test('throws an error if no character sets are selected', () => {
        expect(() => generatePassword(10, false, false, false, false)).toThrow('No character sets selected');
    });
});
