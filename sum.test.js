// const { exportAllDeclaration } = require('@babel/types');
// const { default: test } = require('node:test');
const sum = require('./sum');

test('should add 2+2=4', () => {
    expect(sum(2,2)).toBe(4);
})