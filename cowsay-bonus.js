const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";

const cowsay = (words, lineWidth) => {
  const checkIfEnoughSpacesLeft = (word) => {
    if (word.length <= lineWidth) {
      line = [word];
      currentLine = word.length;
    } else {
      lines.push([word.slice(0, lineWidth - 1) + "-"]);
      checkIfEnoughSpacesLeft(word.slice(lineWidth - 1));
    }
  };

  let lines = [];
  let currentLine = 0;
  let line = [];

  if (lineWidth <= 1) {
    for (let i = 0; i < words.length; i++) {
      lines.push(words[i]);
    }
  } else {
    words = words.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (currentLine + line.length + words[i].length <= lineWidth) {
        line.push(words[i]);
        currentLine = currentLine + words[i].length;
      } else {
        const charLeft = lineWidth - line.join(" ").length;
        if (charLeft > 2 && words[i].length === charLeft - 1) {
          line.push(words[i]);
          line.push(line);
          line = [];
          currentLine = 0;
        } else if (charLeft > 2) {
          line.push(words[i].slice(0, charLeft - 2) + "-");
          line.push(line);
          const secondPart = words[i].slice(charLeft - 2);

          checkIfEnoughSpacesLeft(secondPart);
        } else {
          line.push(line);
          checkIfEnoughSpacesLeft(words[i]);
        }
      }
    }

    lines.push(line);
  }
  console.log(` ${"_".repeat(lineWidth + 2)}`);
};

console.log(cowsay(str));
