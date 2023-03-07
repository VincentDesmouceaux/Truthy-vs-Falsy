/*
  Description :
  Fills elements of array with value.

  Arguments :
  1) The array with values.
  2) The value to fill array with.

  Returns :
  The filled array.
*/

// Début de votre code

// const fill = (tab, str) => {
//   const result = [];

//   for (let i = 0; i < tab.length; i++) {
//     result.push(str);
//   }

//   return result;
// };

const fill = (tab, str) => {
  for (let i = 0; i < tab.length; i++) {
    tab[i] = str;
  }
  return tab;
};

// Fin de votre code

console.log(fill([1, 2, 3], "a")); // Doit afficher `['a', 'a', 'a']`

console.log(fill(["Hello", "World"], "Bonjour")); // Doit afficher `["Bonjour", "Bonjour"]
