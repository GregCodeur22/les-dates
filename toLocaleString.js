const date = new Date(2020, 1, 29, 21, 30, 45);

const dateDisplayed = date.toLocaleString("fr-FR");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
const dateDisplayedLong = date.toLocaleString("fr-FR", options);

console.log(dateDisplayed); // 29/02/2020, 21:30:45
console.log(dateDisplayedLong); // samedi 29 février 2020, 21:30
