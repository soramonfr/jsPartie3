//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  return sentence.length;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  return sentence.replace('e' , ' ');
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  return firstSentence.concat(secondSentence);
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  return sentence.charAt(4);
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  return sentence.substring(0 , 9);
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  return sentence.toUpperCase();
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  return sentence.toLowerCase();
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  return sentence.trim();
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  // if (typeof sentence === "string") {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return typeof sentence === "string";
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  //fileName.split('.').pop();
  return fileName.substring(fileName.lastIndexOf('.')+1, fileName.length);
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  // return sentence.match(/ /g).length;
  return sentence.length - sentence.replaceAll(' ', '').length;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  // let str = "";
  // for (let i=sentence.length ; i >= 0; i--) {
  //   str = str + sentence.charAt(i);
  // }
  // return str;
  return sentence.split('').reverse().join('');
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  // return sentence.indexOf("La Manu") >= 0;
  // return sentence.indexOf("La Manu") !== -1;
  return sentence.includes("La Manu");
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  return numbersArray.map(Math.abs);
//  return numbersArray.map(val => Math.abs(val));
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}
