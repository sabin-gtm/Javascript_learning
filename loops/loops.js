console.log(".........For Loop...........");
for (let i = 1; i <= 10; i++) {
  console.log(i + " Sabin Gautam");
}

console.log(".........While Loop...........");
let i = 1;
while (i <= 10) {
  console.log(i + " Sabin Gautam");
  i++;
}

console.log(".........Do While Loop...........");
i = 1;
do {
  console.log(i + " Sabin Gautam");
  i++;
} while (i <= 10);

console.log(".........For Of Loop...........");
let str = "Sabin Gautam";
for (let ch of str) {
  console.log(ch);
}

for (i = 0; i < str.length; i++) {
  console.log("    " + str[i]);
}

console.log(".........For In Loop...........");
for (let ch in str) {
  console.log(ch);
}

//Question 1

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//Question 2

let st = "Hello World",
  vowel = 0,
  space = 0;

for (let ch of st) {
  //For Of Loop.
  if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u" ||
    ch === "A" ||
    ch === "E" ||
    ch === "I" ||
    ch === "O" ||
    ch === "U"
  ) {
    console.log(ch + " is a vowel");
    vowel++;
  } else if (ch === " ") {
    space++;
  }
}
console.log("Total vowels: " + vowel);
let consonant = st.length - vowel - space; //st.length is used to get total size of string
console.log("Total consonants: " + consonant);

//question 3
let computernumber = 6;
let guess = null;
while (guess != computernumber) {
  guess = Number(prompt("Guess the number:"));
  if (isNaN(guess)) {
    //Check for  is NaN like this in js
    console.log("Please enter a valid number.");
  } else if (guess < computernumber) {
    alert("Too low! Try again.");
  } else if (guess > computernumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the number.");
  }
}

//question 4

let password = "Sabin123";
let attempt = 0;
let userInput = null;

while (userInput !== password && attempt < 3) {
  userInput = prompt("Enter the password:");
  attempt++;
  if (userInput === password) {
    alert("Access granted!");
  } else if (userInput !== password && attempt < 3) {
    alert("Access denied!");
  } else {
    alert("Too many attempts! Access permanently denied.");
  }
}

//Question 5
let no = 5;
for (let i = 1; i <= no; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + " " + j;
  }
  console.log(str);
}

// Question 6

let playagain = "yes";
while (playagain.toLowerCase() === "yes") {
  alert(
    "You Are In A Dark Forest. You See Two Paths Ahead. Do You Choose The Left Path Or The Right Path? (Type 'left' or 'right')",
  );

  let userchoice = prompt("Enter your choice (left/right):").toLowerCase(); //toLowerCase() for lowercase string..

  if (userchoice === "left") {
    alert("You see something shiny in the mud.");
    userchoice = prompt("Do You Pick It Up.(yes or no)").toLowerCase();
    if (userchoice === "yes") {
      alert("You found a magical amulet! You win!");
    } else {
      alert("You sink slowly in the mud  and lose the game.");
    }
  } else {
    alert("You found a cave, Do you want to enter? (yes or no)");
    userchoice = prompt("Enter your choice (yes/no):").toLowerCase();
    if (userchoice === "yes") {
      alert("You encounter a dragon! You lose!");
    } else {
      alert("You safely walk away and win the game!");
    }
  }
  alert("Do you want to play again? (yes or no)");
  playagain = prompt("Enter your choice (yes/no):").toLowerCase();
}

