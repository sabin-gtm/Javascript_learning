let n = 5;
let sum = 0;
for (let i = 1; i < n; i++) {
  sum += i;
}
console.log(sum);

function myFunction(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
console.log(myFunction(5));
console.log(myFunction(1000));

//Normal Function

function greet(name = "Sabin Gautam") {
  console.log(name);
}
greet();
greet("John Doe");

//Function expression

let greet2 = function (a, b) {
  console.log(a + b);
};
greet2(5, 10);

//Flat Arrow function

let greet3 = (a, b) => {
  console.log(a + b);
};

greet3(5, 10);

//Anonymous function
setTimeout(function () {
  console.log("Hello World");
}, 3000);

//immediately invoked function expression (IIFE)
(function () {
  console.log("Hello !");
})();

// question 1st

function capitalize(str) {
  console.log(str.charAt().toUpperCase() + str.slice(1));
}
capitalize("sabin Gautam");

setTimeout(() => {
  alert("Please Log In");
}, 5000);

let price = 1000;
let discount = 20;
let fp = (price, discount) => {
  let result = price - (price * (discount / 100));
  return result;
};

let final = fp(price, discount);
console.log(final);

function gus (name){
    return "@" + name;
}
console.log(gus("Sabin"));

let color = "green";

let traffic = (color)=>{
    if(color.toUpperCase() === "RED"){
console.log("STOP");
    }
    else if((color.toUpperCase() === "YELLOW")){
console.log("WATCH");
    }
    else if((color.toUpperCase() === "GREEN")){
console.log("GO");
    }
    else {
console.log("System error");
    }

}
traffic(color);

