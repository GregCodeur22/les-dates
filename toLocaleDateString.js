const date = new Date(2020, 1, 29, 21, 30, 45);

const dateDisplayed = date.toLocaleDateString("fr-FR");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateDisplayedLong = date.toLocaleDateString("fr-FR", options);

console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // samedi 29 février 2020
