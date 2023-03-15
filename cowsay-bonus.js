const cowsay = (words, lineWidth) => {
  // -- Déclaration d'une fonction pour gérer le découpage du mot --------------------------------------------
  const checkIfEnoughSpacesLeft = (word) => {
    if (word.length <= lineWidth) {
      // --- SI le mot est moins long, ou aussi long, que la longueur de ligne souhaitée, je l'ajoute à ma nouvelle ligne
      line = [word];
      currentLine = word.length;
    } else {
      // --- SINON, le mot est plus long que la longueur de ligne souhaitée

      // ------ 1 --> coupe la deuxième partie du mot et ajoute une nouvelle ligne contenant la première partie du mot coupé, plus un tiret
      lines.push([word.slice(0, lineWidth - 1) + "-"]);

      // ------ 2 --> la fonction s'appelle elle-même pour couper le mot autant de fois que nécessaire
      checkIfEnoughSpacesLeft(word.slice(lineWidth - 1));
    }
  };
  //---------------------------------------------

  // Tableau qui contiendra des tableaux (chaque ligne)
  let lines = [];
  // Longueur de la ligne en cours de création
  let currentLine = 0;
  // Tableau qui contiendra les mots de la ligne en cours de création
  let line = [];

  if (lineWidth <= 1) {
    for (let i = 0; i < words.length; i++) {
      lines.push(words[i]);
    }
  } else {
    // Transforme la string en un tableau de mots
    words = words.split(" ");

    for (let i = 0; i < words.length; i++) {
      if (currentLine + line.length + words[i].length <= lineWidth) {
        // SI la longueur de la ligne + le nombre d'espace entre les mots + la longueur du mot à ajouter est inférieur ou égal à la longueur de ligne souhaitée

        line.push(words[i]);
        currentLine = currentLine + words[i].length;
      } else {
        const charLeft = lineWidth - line.join(" ").length;

        if (charLeft > 2 && words[i].length === charLeft - 1) {
          // Si la longueur de la ligne en cours (avec espace entre chaque mot) + la longueur du mot à ajouter est inférieur à la longueur de ligne souhaitée
          line.push(words[i]);
          lines.push(line);

          // Réinitialisation de la ligne
          line = [];
          currentLine = 0;
        } else if (charLeft > 2) {
          // S'il reste au moins 3 espaces

          // --- Ajoute à la ligne en cours le mot coupé avec un tiret
          line.push(words[i].slice(0, charLeft - 2) + "-");
          // --- Ajoute cette ligne au tableau contenant toutes les lignes
          lines.push(line);

          const secondPart = words[i].slice(charLeft - 2);

          // --- Gestion de la deuxième partie du mot coupé
          checkIfEnoughSpacesLeft(secondPart);
        } else {
          // SI le nombre d'espace restant est inférieur à 3 alors le mot n'est pas ajouté à la ligne en cours
          lines.push(line);

          // --- Gestion de la deuxième partie du mot coupé
          checkIfEnoughSpacesLeft(words[i]);
        }
      }
    }
    // Ajoute la ligne au tableau contenant toutes les lignes
    lines.push(line);
  }

  //---------------------------------------------
  // Afichage final dans la console
  //---------------------------------------------

  // Ligne supérieur
  console.log(` ${"_".repeat(lineWidth + 2)}`);

  // Bulle avec le texte
  for (let i = 0; i < lines.length; i++) {
    if (lineWidth <= 1) {
      // SI la longueur de ligne souhaitée est égale à 1
      if (i === 0) {
        console.log(`/ ${lines[i]} \\`);
      } else if (i === lines.length - 1) {
        console.log(`\\ ${lines[i]} /`);
      } else {
        console.log(`| ${lines[i]} |`);
      }
    } else {
      // SI la longueur de ligne souhaitée est supérieur à 1
      const spacesLeft = lines[i].join(" ").length;

      if (i === 0) {
        console.log(
          `/ ${lines[i].join(" ")}${" ".repeat(lineWidth - spacesLeft)} \\`
        );
      } else if (i === lines.length - 1) {
        console.log(
          `\\ ${lines[i].join(" ")}${" ".repeat(lineWidth - spacesLeft)} /`
        );
      } else {
        console.log(
          `| ${lines[i].join(" ")}${" ".repeat(lineWidth - spacesLeft)} |`
        );
      }
    }
  }

  // Ligne inférieur
  console.log(` ${"_".repeat(lineWidth + 2)} \n`);

  // Motif de la vache
  console.log(
    "        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||"
  );
};

const str =
  "Lorem ipsum dolor sit amet, consectetur condimentum, adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";

cowsay(str, 10);
