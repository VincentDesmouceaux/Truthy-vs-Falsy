const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui sapien, faucibus in justo viverra, placerat dapibus leo. Integer hendrerit tincidunt ante, sed rhoncus augue efficitur porttitor. Sed faucibus enim at nisl aliquet, eu tempor augue congue. Suspendisse venenatis neque eu eros consequat volutpat. Vivamus hendrerit sed mauris placerat venenatis. Aliquam elementum magna ut accumsan mollis. Aenean et ultrices justo. Integer volutpat ullamcorper dignissim. Nam condimentum, sem et lacinia commodo, nisl diam consectetur tortor, in accumsan sem diam eget velit. Donec in pulvinar orci. Quisque eu mauris sapien. Phasellus non mollis nunc. Quisque sollicitudin tristique sapien. Sed massa felis, varius ornare nunc ac, maximus scelerisque tortor. Donec luctus libero mauris, vitae congue orci euismod condimentum. Sed metus ipsum, facilisis quis nibh non, fringilla fermentum arcu.";

const cowsay = (words) => {
  words = words.split(" ");

  const lines = [];

  let currentLine = 0;

  let line = [];

  for (let i = 0; i < words.length; i++) {
    if (line.length - 1 + currentLine + words[i].length < 39) {
      line.push(words[i]);
      currentLine = currentLine + words[i].length;
    } else {
      lines.push(line);
      line = [words[i]];
      currentLine = words[i].length;
    }
  }
  lines.push(line);

  console.log(" _________________________________________");

  for (let i = 0; i < lines.length; i++) {
    const spacesLeft = lines[i].join(" ").length;

    if (i === 0) {
      console.log(`/ ${lines[i].join(" ")}${" ".repeat(39 - spacesLeft)} \\`);
    } else if (i === lines.length - 1) {
      console.log(`\\ ${lines[i].join(" ")}${" ".repeat(39 - spacesLeft)} /`);
    } else {
      console.log(`| ${lines[i].join(" ")}${" ".repeat(39 - spacesLeft)} |`);
    }
  }
  console.log(" ----------------------------------------- \n");

  console.log("        \\   ^__^");
  console.log("         \\  (oo)\\_______");
  console.log("            (__)\\       )\\/\\");
  console.log("                ||----w |");
  console.log("                ||     ||");
};

cowsay(str);
