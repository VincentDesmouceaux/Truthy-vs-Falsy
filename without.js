/*
  Description :
  Creates an array excluding all given values.

  Arguments :
  1) The array to inspect.
  2) The values to exclude.

  Returns :
  The new array of filtered values.
*/

// Début de votre code

// const without = (tab, toExclude) => {
//   const newTab = [];

//   for (let i = 0; i < tab.length; i++) {
//     if (toExclude.indexOf(tab[i]) === -1) {
//       newTab.push(tab[i]);
//     }
//   }
//   return newTab;
// };

const without = (tab, toExclude) => {
  newTab = [];

  for (let i = 0; i < tab.length; i++) {
    let isPresent = false;

    for (let j = 0; j < toExclude.length; j++) {
      if (tab[i] === tab[j]) {
        isPresent = true;
        break;
      }
    }
    if (isPresent === false) {
      newTab.push(tab[i]);
    }
  }
  return newTab;
};

// Fin de votre code

console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
