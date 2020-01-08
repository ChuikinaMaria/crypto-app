const assert = require('assert');

const caesarize = require('./logic/caesarize').caesarize;
const reverseChunk = require('./logic/reverse-chunk').reverseChunk;
const crypto = require('./logic/crypto').crypto;

 describe('crypto', () => {
    describe('caesarize', () => {
        it('shifts charachters of the string with a number', () => {
            assert.equal(caesarize("aBcD", 3), 'dEfG');
            assert.equal(caesarize("aBcD", -3), 'xYzA');
            assert.equal(caesarize("heLLo worLd!", 1), 'ifMMp xpsMe!')
        })
    })
    describe('reverseChunk', () => {
        it('switches words in the phrase', () => {
            assert.equal(reverseChunk(' plug (play!)'), ' (play!) plug');
            assert.equal(reverseChunk('const x = null; '), 'null; = x const ')
        })
    })
    describe('crypto', () => {
        it('messes everything up completely', () =>{
            assert.equal(crypto(' AbC 123!# cDe ', 1), ' dEf 123!# BcD ')
        })
    })

    
})

// { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
//   { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
//   { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
//   { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
//   { name: 'fifth', args: ["", 5], expected: '' },
//   { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
//   { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^M*(#' },