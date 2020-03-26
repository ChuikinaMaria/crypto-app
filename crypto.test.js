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
            assert.equal(crypto(' AbC 123!# cDe ', 1), ' dEf 123!# BcD ');
            assert.equal(crypto("heLLo worLd!", 0), 'worLd! heLLo');
            assert.equal(crypto("heLLo worLd!", 1), 'xpsMe! ifMMp');
            assert.equal(crypto('mnOpQr #@&&^F*(#', 26), '#@&&^F*(# mnOpQr');
        })
    })

    
})