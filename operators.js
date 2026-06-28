console.log(5 + 2);
console.log("5+2");
console.log("5+2=", 5 + 2);
console.log("5^6=", 5 ** 6);
console.log("5/6=", 5 / 6);
let price = 150;
let quantity = 3;
let totalprice = price * quantity;
console.log("Totalprice", totalprice);
let discount = totalprice * 0.11;
console.log("Discount", discount);
console.log("Finalprice", totalprice - discount);

// -------------------------------------------------------------------------------------------->
let a =5;
a=a+5;
console.log(a);

let b=10;
b-=5;
console.log(b);

//--------------------------------------------------------------------------------------------->
let c=5;
console.log(++c);
console.log(c++);
console.log(c);

let n=10;
console.log(n++ + ++n);
n=10;
let no=(n++ + ++n);
console.log(no);

//-------------------------------------------------------------------------------------------.>
//terniary operator
let age=19;
let yes="You are eligible for voting";
let not="You are not eligible for voting";
age <= 18 ? console.log(not): console.log(yes);

//.............................................................................................>
let ag=18;
ag <=18 ? console.log("Eligible for booking"): console.log("Not eligible For booking");

//.............................................................................................>
let username= "admin";
let password= "admin123";

const result=(username && password) ? "Login successful" : "Login failed";
console.log(result);

//Find the largest number among three numbers
let num1=10;
let num2=20;
let num3=15;
const largest = (num1>num2) ? (num1>num3 ? num1:num2): (num2>num3 ? num2:num3);
console.log("The largest number is:", largest);

//..............................................................................................>
 
 let rel = "RAM" && 25 ? "Statement1"  : "Statement2"; //TRUTHY VALUE
 console.log(rel);

 let resu= (0 && 25) ? "Statement1": "Statement2";
 console.log(resu);

 // SHORT_CIRCUTING.............................................>

console.log("" || undefined || "Sabin" || null || -0);
console.log("" && undefined && "Sabin" && null && -0);
console.log("SABIN" && 23 && "3");

let reslt=null ?? "mkl";  //null and undefined are errrors or skippped...
console.log(reslt);

//...................................................................>

let nom1 = Number(prompt("enter first number"));
let nom2 = Number(prompt("enter second number"));
console.log("Result is :",nom1+nom2);

let rt = (nom1 % 2 === 0) ? "Even Number": "Odd Number";
console.log(rt);

