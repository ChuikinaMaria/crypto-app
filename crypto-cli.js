#!/usr/bin/env node

const caesarize = require("./logic/caesarize").caesarize;
const reverseChunk = require("./logic/reverse-chunk").reverseChunk;
const crypto = require("./logic/crypto").crypto;

const OPERATIONS = {
  "+": caesarize,
  "*": reverseChunk,
  "=": crypto
};

function usage() {
  console.log();
  console.log("Usage: Type your message and a secret code which is a number");
  console.log("and choose type of operation:");
  console.log(" crypto-app message number +      to caesarize your message,");
  console.log(" crypto-app message number *      to reverse it,");
  console.log(" crypto-app message number =      to do both");
  console.log();
  console.log("Hello! It is a message! 5 =");
  console.log();
}

let length = process.argv.length;

let op = process.argv[length - 1];

if (!Object.keys(OPERATIONS).includes(op)) {
  usage();
  process.exit(1);
}

let shiftNumber = process.argv[length - 2];
shiftNumber = parseFloat(shiftNumber);

if (isNaN(shiftNumber)) {
  usage();
  process.exit(1);
}

let message = [];

for (let i = 2; i < length - 2; i++) {
  message.push(process.argv[i]);
}
let str = message.join(" ");

const opFn = OPERATIONS[op];
const result = opFn(str, shiftNumber);

console.log(result);
