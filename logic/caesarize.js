exports.caesarize = (strToCaesarize, shiftNumber) => {
  let checkChar;
  let shiftedChCode;

  let arrFromStr = strToCaesarize.split(``); // array of symbols

  //map changes every element of array and returns array with shifted chars
  let shiftedArr = arrFromStr.map(e => {
    let chCode = e.charCodeAt(); //charCode of element

    checkChar =
      65 <= chCode && chCode <= 90
        ? `upLetter` //checking for charCode
        : 97 <= chCode && chCode <= 122
        ? `lowLetter`
        : `symbol`;

    let newChCode = shiftNumber + chCode; // new Char Code for letters

    switch (
      checkChar // switch between different types of chars
    ) {
      case `upLetter`:
        shiftedChCode =
          newChCode > 90
            ? newChCode - 26
            : newChCode < 65
            ? newChCode + 26
            : newChCode;
        break;

      case `lowLetter`:
        shiftedChCode =
          newChCode > 122
            ? newChCode - 26
            : newChCode < 97
            ? newChCode + 26
            : newChCode;
        break;

      default:
        shiftedChCode = chCode;
    }
   let shiftedCh = String.fromCharCode(shiftedChCode); // returns shifted char as a string
    return (e = shiftedCh);
  });

  return shiftedArr.join(``); // makes a string out of array
    };
