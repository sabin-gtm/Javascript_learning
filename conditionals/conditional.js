// let ProductInStock = 4;

// if (ProductInStock <= 0) {
//   console.log("Product Is Out Of Stock");
// } else {
//   console.log("Product  Available");
// }

// let weather = "rainy";
// if (weather === "rainly") {
//   console.log("Take an umbrella");
// } else {
//   console.log("Enjoy the weather");
// }

// let color = "yellow";

// switch (color) {
//   case "red":
//     console.log("Stop \n");
//     break;
//   case "yellow":
//     console.log("Warning");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Unknown Color");
// }

// let islogin = 0;

// let message = islogin ? "Welcome Back !" : "Please Log In";
// console.log(message);

// let cartValue = 777;
// let finalPrice;

// if (cartValue <= 50) {
//   console.log("No discount for less than 20 $");
//   finalprice = cartValue - cartValue * 0.0;
//   console.log("Final Price:" + finalprice.toFixed(2));
// } else if (cartValue > 50 && cartValue <= 100) {
//   console.log("10% Discount applied for 50-100 $");
//   finalprice = cartValue - cartValue * 0.1;
//   console.log("Final Price:" + finalprice.toFixed(2));
// } else {
//   console.log("20% Discount applied for >100 $");
//   finalprice = cartValue - cartValue * 0.2;
//   console.log("Final Price:" +finalprice.toFixed(2));
// }

// // Important Idea.................................................

// let a =5, b=6, c=4, d=9;
// console.log(`Value of a is ${a}\nValue of b is ${b}\nValue of c is ${c}\nValue of d is ${d}\n`);

// let userRole = "editor";

// switch (userRole) {
//   case "admin":
//     console.log("Welcome Admin ! Do your Everything");
//     break;
//   case "editor":
//     console.log("Welcome Editor ! Edit anything");
//     break;
//   case "viewer":
//     console.log("Welcome Viewer! You can only view");
//     break;
//   default:
//     console.log("Unknown Role ! Please contact support");
// }

// let num1 =23;
// let num2 = 4;
// let operator = "*";

// switch (operator) {
//   case "+":
//     console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//     break;
//   case "/":
//     if (num2 !== 0) {
//       console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
//     } else {
//       console.log("Error: Division by zero is not allowed.");
//     }

//     break;
//   default:
//     console.log("Invalid operator. Please use +, -, *, or /.");
// }

// To make an ATM system

let totalbalance = 10000;

let userchoice = Number(prompt("Enter your choice: [1. Check Balance 2. Deposit 3. Withdraw 4. Exit]"));

if (userchoice === 1) {
  console.log("your balance is : ", totalbalance);
}
else if(userchoice === 2)
{
  let depositamount = Number(prompt("Enter amount to deposit"));
  if (depositamount > 0) {
    totalbalance += depositamount;
    console.log("Deposit successful. Your new balance is: ", totalbalance);
  }
  else {
    console.log("Invalid deposit amount. Please enter a positive number.");
  }

} else if(userchoice === 3)
{
  let withdrawamount = Number(prompt("Enter amount to withdraw"));
  if (withdrawamount > 0 && withdrawamount <= totalbalance) {
    totalbalance -= withdrawamount;
    console.log("Withdrawal successful. Your new balance is: ", totalbalance);
  }
  else{
    console.log("Invalid withdrawal amount. Please enter a valid number.");
  }
} else {
  console.log("Exit/Invalid");
}

