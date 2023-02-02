// const { default: test } = require('node:test');
const reverseString = require('./revstring');

test('test should reverse', () => {
    expect(reverseString('Divine')).toEqual('enivid');
})