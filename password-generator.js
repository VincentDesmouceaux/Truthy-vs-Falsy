const getRandomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + min);
};

const passwordGen = (num) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  let result = "";
  const str = alphabet + alphabet.toUpperCase() + numbers;
  const len = str.length;

  if (num < 6 || num > 15) {
    return "Veuillez entrer un nombre compris entre 6 et 15 !";
  } else {
    for (let i = 0; i < num; i++) {
      result += str[getRandomInt(0, len)];
    }
  }
  return result;
};

console.log(passwordGen(8));
console.log(passwordGen(2));
console.log(passwordGen(20));
