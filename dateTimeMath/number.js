//number

// let num = 123456789;
// let num1 = 1234.56789
// console.log(num);
// console.log(num1);
// console.log(typeof num);
// console.log(typeof num1);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.EPSILON); // smallest possible difference between two numbers

// let num = 123.345;
// num = parseInt(num);
// console.log(Number.isInteger(num));
// num = '123.456px'
// console.log(parseFloat(num));

// let num = 123.12
// console.log(num.toFixed(3));//fixes the no. of decimal counts.
// console.log(num.toExponential(3));
// console.log(num.toPrecision(4));// will be in expo if decimal not remains

// let num = 1.499;
// console.log(Math.round(num));

//math.abs() for absolute value |-5| =5 and |5| = 5 also
// math.sqrt(x), math.pow(x,y) = x^y, math.min(z,x,c,v,b,nm,,,,,,,,,,,), math.max(z,x,c,v,b,nm,,,,,,,,,,,), math.random() = 0(included) to 1(excluded): Range [0,1)

let min = 5, max = 25;
console.log(Math.floor(Math.random()*(max-min +1)+min));

