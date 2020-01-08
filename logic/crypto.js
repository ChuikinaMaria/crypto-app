const caesarize = require('./caesarize').caesarize;
const reverseChunk = require('./reverse-chunk').reverseChunk;

exports.crypto = (str, number) => {
    str = caesarize(str, number);
    return str = reverseChunk(str);
    }