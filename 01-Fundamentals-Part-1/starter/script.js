/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = "Jonas";
console.log('Jonas');
console.log('Jonas');

// Variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

// Two last one are not very descriptive. It is better to use descriptive variables.
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'true');

javascriptIsFun = "YES!";

let year;
console.log(year);
console.log(typeof year);
year = 1991;



// the result of it is considered as an error in JavaScipt
console.log(typeof null)

// Let, const, var

// let can be reassigned. Remember to always DECLARE a variable!

let age = 30;
age = 31;

// const cannot be reassigned

const birthDay = 1991;
birthDay = 1990;

// var can be reassigned

var job = 'programmer';
job = 'teacher';



// Operators

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * ageSarah)
console.log(ageJonas / ageSarah)
console.log(ageJonas ** ageSarah)

const firstName = 'Jonas';
const lastName = 'Schmedtmann';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

// Operator precedent

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge);