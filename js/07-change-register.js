// Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
// Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT".

const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);

for (const letter of letters) {
  //   if (letter === letter.toLowerCase()) {
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //     }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(invertedString);
