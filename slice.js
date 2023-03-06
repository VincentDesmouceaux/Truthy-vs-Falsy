/*
  Description :
  Gets all but the first element of array.

  Arguments :
  1) The array to query.

  Returns :
  The slice of array.
*/

// Début de votre code
const tail = (tab) => {
  const slice = tab.slice(1, 3);

  return slice;
};

// Fin de votre code

console.log(tail([1, 2, 3])); // Doit afficher `[2, 3]`
