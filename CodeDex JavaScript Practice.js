// File contains JavaScript practice code I implemented on CodeDex.

/* 01. Setting Up
//console.log("Hello Internet!")
// 02. The Console
console.log('My favourite food is: Pizza')
// 03. Letter Tree
console.log("   a   ");
console.log("  b c ");
console.log(" d e f ");
console.log("g h i j");
console.log("   k   ");
// 04. Receipt
console.log('==================================');
console.log('         McDONALDS RECEIPT        ');
console.log('----------------------------------');
console.log('           Order Details          ');
console.log('----------------------------------');
console.log('Item           Quantity   Price   ');
console.log('----------------------------------');
console.log('🍔 Burger       1          2.99   ');
console.log('🍟 Fries        1          2.49   ');
console.log('🥤 Soda         1          1.99   ');
console.log('----------------------------------');
console.log('Total                      7.47   ');
console.log('================================== ');
// 05. Let and Const
const firstName = "Carl";
const favouriteColor = "Yellow";

let currentLocation = "Middlesbrough";
let currentMood = "Happy";

console.log(firstName);
console.log(favouriteColor);
console.log(currentLocation);
console.log(currentMood);

currentMood = "Sad";
console.log(currentMood);
// 06. Data Types
let companyName = "Microsoft";
const foundingYear = "1975";
let isActive = true;
let fundingAmount;

console.log(companyName);
console.log(foundingYear);
console.log(isActive);
console.log(fundingAmount);
// 07. Temperature Scenario
let temperatureFahrenheit = 55;
let temperatureCelcius;

temperatureCelcius = (temperatureFahrenheit - 32) / 1.8;
console.log(temperatureCelcius);
// 08. BMI Scenario
let bmi;
let mass = 240;
let height = 155 / 100;

bmi = mass / height ** 2

console.log(bmi)
// 09. Planet Weight Scenario
let earth_weight = 210;
let destination_weight;

destination_weight = earth_weight * 0.38;

console.log("Your weight on Earth is " + earth_weight + " pounds.")
console.log("Your weight on Mars is: " + destination_weight + " pounds.")
// 10. Coin Flip Scenario
let num = Math.random();

if (num > 0.5) {
    console.log("Heads");
}
else {
    console.log("Tails");
}
// 11. If, else practice
const hour = 11;

if (hour < 12) {
    console.log("Good Morning")
    console.log("Make your bed, brush teeth, meditate");
}
else {
    console.log("Good Afternoon");
    console.log("Afternoon Routines: Go for a run, read, shower :)");
}
// 12. pH Levels Scenario
const pH = 9;

if (pH > 7) {
    console.log("Basic");
}
else if (pH < 7) {
    console.log("Acidic");
}
else {
    console.log("Neutral");
}
// 13. Magic 8 Ball Scenario
const randomNumber = Math.floor(Math.random() * 9) + 1;
const question = "Is Drake the best rapper?";
let answer;

if (randomNumber == 1) {
    answer = "Yes, definitely";
}
else if (randomNumber == 2) {
    answer = "It is decidely so.";
}
else if (randomNumber == 3) {
    answer = "Without a doubt.";
}
else if (randomNumber == 4) {
    answer = "Reply hazy, try again.";
}
else {
    answer = "My sources say no.";
}

console.log(question);
console.log(answer);
// 14. AQI Scenario
const aqi = 200;
if (aqi > 0 && aqi < 50) {
    console.log("Good");
}
else if (aqi > 51 && aqi < 100) {
    console.log("Moderate");
}
else if (aqi > 101 && aqi < 150) {
    console.log("Unhealthy (Sensitive Groups)")
}
else if (aqi > 151 && aqi < 200) {
    console.log("Unhealthy")
}
else if (aqi > 201 && aqi < 300) {
    console.log("Very Unhealthy")
}
else {
    console.log("Hazardous");
}
// 15. Rock Paper Scissors Scenario
let computer = Math.floor(Math.random() * 3);
let player = 0;

let playerMove;
let computerMove;

if (player == 0) {
    playerMove = "Rock";
}
else if (player == 1) {
    playerMove = "Paper";
}
else {
    playerMove = "Scissors";
}

console.log(playerMove)

if (computer == 0) {
    computerMove = "Rock";
}
else if (computer == 1) {
    computerMove = "Paper";
}
else {
    computerMove = "Scissors";
}

console.log(computerMove)

if (playerMove == "Rock" && computerMove == "Scissors") {
    console.log("Rock beats Scissors! Player wins!")
}
else if (playerMove == "Scissors" && computerMove == "Paper") {
    console.log("Scissors beats Paper! Player wins!")
}
else if (playerMove == "Paper" && computerMove == "Rock") {
    console.log("Paper beats Rock! Player wins!")
}
else if (playerMove == computerMove) {
    console.log("Draw!")
}
else {
    console.log(computerMove + " beats " + playerMove + " Computer wins!")
}
// 16. Duck Duck Goose Scenario
let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber != 7) {
    console.log("Duck 🦆");
    randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");
// 17. Lucky Number Scenario
const luckyNumber = 7;
let guess = Math.floor(Math.random() * 10) + 1;

while (guess != luckyNumber) {
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is: " + luckyNumber);
// 18. Not Tell Lies Scenario
for (let i = 1; i <= 100; i++) {
    console.log("I must not tell lies!")
}
// 19. Even the Odds Scenario
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
        // i is odd
        continue;
    }
    else if (i == 42) {
        console.log(i);
        break;
    }
    console.log(i);
}
*/

// 20. Based Numbers Scenario
const myNumber = 25;
let binary = "";

let i = myNumber;
while (i > 0) {
    if (i % 2 == 0) {
        binary = "0" + binary;
    }
    else {
        binary = "1" + binary;
    }
    i = Math.floor(i / 2);
}

console.log(binary);