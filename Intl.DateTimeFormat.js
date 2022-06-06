const date = new Date(2020, 1, 29, 21, 30, 45);
const dateDisplayed = new Intl.DateTimeFormat("fr-FR").format(date);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const dateDisplayedLong = new Intl.DateTimeFormat("fr-FR", options).format(
  date
);

console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // samedi 29 février 2020, 21:30
