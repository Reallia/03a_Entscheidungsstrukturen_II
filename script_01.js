"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 25;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;
let isMarkOlder, isMarkEqual;

//Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************* IF *************/
// TINA --> There is no alternative!
// entweder Ja oder nix ... alternativlos

// if (true)
// if (false)
// if (isJohnOlder)
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter!");
// }

/************* IF - ELSE *************/
// mit Alternative
// entweder Ja oder nein


if (isJohnOlder) 
{
    console.log("John ist älter!");
} 
else 
{
    console.log("John ist jünger!");
}

/************* Ternäre (ternary Schreibweise) *************/
// console.log(isJohnOlder) ? "John is older" : "Mark is older";