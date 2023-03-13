// const rot13 = (str) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   let result = "";
//   const alphabetUpper = alphabet.toUpperCase();
//   const len = str.length;

//   for (let i = 0; i < len; i++) {
//     let element = "";
//     const indexLowerChar = alphabet.indexOf(str[i]);
//     const indexUpperChar = alphabet.indexOf(str[i]);

//     if (indexLowerChar !== -1 && indexLowerChar < 13) {
//       element += alphabet[indexLowerChar + 13];
//     } else if (indexLowerChar !== -1 && indexLowerChar >= 13) {
//       element += alphabet[indexLowerChar - 13];
//     } else if (indexUpperChar !== -1 && indexUpperChar < 13) {
//       element += alphabet[indexUpperChar + 13];
//     } else if (indexUpperChar !== -1 && indexUpperChar >= 13) {
//       element += alphabet[indexUpperChar - 13];
//     } else {
//       element += str[i];
//     }
//     result += element;
//   }

//   return result;
// };

const rot13 = (str) => {
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyzabcdefghijklm";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (
      lowerCaseLetters.indexOf(str[i]) === -1 &&
      upperCaseLetters.indexOf(str[i]) === -1
    ) {
      newStr += str[i];
    }
    if (lowerCaseLetters.indexOf(str[i]) !== -1) {
      newStr += lowerCaseLetters[lowerCaseLetters.indexOf(str[i]) + 13];
    } else if (upperCaseLetters.indexOf(str[i]) !== -1) {
      newStr += upperCaseLetters[upperCaseLetters.indexOf(str[i]) + 13];
    }
  }
  return str;
};

console.log(rot13("abc"));
console.log(rot13("My horse is Amazing."));
console.log(rot13("AkjhZ zLKIJz , 23y"));
console.log(rot13("-12"));
