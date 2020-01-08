exports.reverseChunk = (str) => {
    const arrFromStr = str.split(' '); //arr of words and spaces
    let obj = {};
    let arrOfKeys = [];
    let arrOfWords = [];
    for (let i=0; i<arrFromStr.length; i++) {
     if (arrFromStr[i] === '') { obj[i] = arrFromStr[i]  //if it is a space it stays in object with the same key
     } else {     
      arrOfKeys.push(i)                                 // if it is a word, it's index goes to array of keys      
      arrOfWords.push(arrFromStr[i]);                   // and the word itself goes to array of value
    }
    }
  arrOfKeys.reverse();                                 // reverses array of keys 
    
  for (let j=0; j<arrOfKeys.length; j++) {             // makes an object of reversed keys and values
    obj[arrOfKeys[j]] = arrOfWords[j] }
 
 const arr = Object.values(obj)                       // makes an array, because keys are number
 const newStr = arr.join(` `);                        // makes a string
 return newStr;


  }