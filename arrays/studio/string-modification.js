const input = require('readline-sync');
let str = "LaunchCode";


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let firstString= str.substring(3,10);
console.log(firstString);
let secondString= str.substring(0,3);
console.log(secondString);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str}, "is a great program, go ${secondString + firstString}!`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userName = input.question("What is your name?");
console.log(userName);
let lettersToMove = input.question("What is the number of letters that will be move?");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let newFirst = userName.substring(lettersToMove, userName.length);
console.log(newFirst);
let newSecond = userName.substring(0, lettersToMove);
console.log(newSecond);
console.log(`${newFirst + newSecond}`);