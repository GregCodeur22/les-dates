/*À partir de la date du 25 décembre 2020, nous voulons :

    Afficher son timestamp dans la console

    Afficher le mois dans la console

    Lui affecter l'heure 20 h 30 et afficher la date dans la console*/

let date = new Date(2020, 11, 26);
console.log(date);
console.log(date.getTime());
console.log(date.getMonth());
date.setHours(21);
date.setMinutes(30);
console.log(date);
