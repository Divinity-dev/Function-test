// const { default: test } = require('node:test')
const Stringlength = require('./string')
test("test length of string", () =>{
    expect(Stringlength('alfa')).toBeGreaterThan(1) && toBeLessThan(10);
})