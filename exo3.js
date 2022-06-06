// À partir de la date du 25 décembre 2020, nous voulons :

//     Afficher la date dans la console au format jj/mm/aaaa (ex : 01/11/2019)

//     Afficher la date dans la console dans un format plus long (ex : samedi 29 février 2020)

let date = new Date(2020, 11, 26);
let dateDisplay = date.toLocaleDateString("fr-FR");

let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let displayDate = date.toLocaleDateString("fr-FR", options);

// console.log(dateDisplay);
// console.log(displayDate);

let datte = new Date(2020, 0, 0);
// console.log(datte);

const dateeee = new Date(2020, 1, 29, 21, 30, 45);

const dateDisplayed = new Intl.DateTimeFormat("fr-FR").format(date);
const dateDisplayed2 = dateeee.toLocaleDateString("fr-FR");

console.log(dateDisplayed);
console.log(dateDisplayed2);
