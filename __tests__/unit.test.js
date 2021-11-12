// unit.test.js

const { TestWatcher } = require('jest');
const functions = require('../code-to-unit-test/unit-test-me.js');

/*

Create 2 tests that should be true, and 2 tests that should be false for each function (4 tests x 5 functions = 20 tests).
For clarification, all of your tests should pass, but you should expect two of your tests to return a true response and two of your tests to return a false response
e.g. expect(2+2).toBe(true) and expect(4+4).toBe(10)

*/

// TODO - Part 2

// tests for phonenumber
test('phoneNumber should recognize a valid phone number', () => {
    expect(functions.isPhoneNumber("(123)243-1234")).toBe(true); 
});
test('phoneNumber should recognize another valid phone number', () => {
    expect(functions.isPhoneNumber("(000)000-0101")).toBe(true); 
});
test('phoneNumber shouldn\'t recognize invalid phone numbers', () => {
    expect(functions.isPhoneNumber("(x23)")).toBe(false); 
});
test('phoneNumber shouldn\'t recognize invalid phone numbers (again)', () => {
    expect(functions.isPhoneNumber("(abc)mcd-0101")).toBe(false); 
}); 

// tests for emails
test('isEmail should recognize a valid email', () => {
    expect(functions.isEmail("somecoolguy@gmail.com")).toBe(true); 
});
test('isEmail should recognize another valid email', () => {
    expect(functions.isEmail("student@ucsd.edu")).toBe(true); 
});
test('isEmail shouldn\'t recognize invalid emails', () => {
    expect(functions.isEmail("klasdjfklsadjf")).toBe(false); 
});
test('isEmail shouldn\'t recognize invalid emails (again)', () => {
    expect(functions.isEmail("dhjlkasjdklas@something")).toBe(false); 
}); 

// tests for passwords
test('isStrongPassword should recognize a valid password', () => {
    expect(functions.isStrongPassword("A2390d_")).toBe(true); 
});
test('isStrongPassword should recognize another valid password', () => {
    expect(functions.isStrongPassword("Woodjhf35")).toBe(true); 
});
test('isStrongPassword shouldn\'t recognize super short passwords', () => {
    expect(functions.isStrongPassword("hi")).toBe(false); 
});
test('isStrongPassword shouldn\'t recognize super long passwords', () => {
    expect(functions.isStrongPassword("d98fh834h83f48hg43948g34g433434")).toBe(false); 
}); 

// tests for dates
test('isDate should recognize a valid date', () => {
    expect(functions.isDate("01/01/2000")).toBe(true); 
});
test('isDate should recognize another valid date', () => {
    expect(functions.isDate("1/1/2000")).toBe(true); 
});
test('isDate shouldn\'t recognize invalid dates', () => {
    expect(functions.isDate("2000/1/1")).toBe(false); 
});
test('isDate shouldn\'t recognize invalid dates 2', () => {
    expect(functions.isDate("2")).toBe(false); 
}); 

// tests for hex colors
test('isHexColor should recognize a valid hex color', () => {
    expect(functions.isHexColor("FFF")).toBe(true); 
});
test('isHexColor should recognize another valid hex color', () => {
    expect(functions.isHexColor("#AB23FE")).toBe(true); 
});
test('isHexColor shouldn\'t recognize invalid hex colors', () => {
    expect(functions.isHexColor("ZWFFFF")).toBe(false); 
});
test('isHexColor shouldn\'t recognize invalid hex colors again', () => {
    expect(functions.isHexColor("#FFFF")).toBe(false); 
}); 