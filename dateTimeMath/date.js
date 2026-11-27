let date = new Date("2006-01-01T10:25:30.000Z");
console.log(date);

let date2 = new Date(2025, 4, 20) // output -> 2025-05-19T18:15:00.000Z month is 0 based so 4 is May
console.log(date2);

let date3 = new Date(1236584366327);// output -> 2009-03-09T18:32:46.327Z is the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(date3);

console.log("----------------------------------------------");

let dt = new Date();
console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate()); //is date(gate in nepali) like 25, 30, 29 etc.
console.log(dt.getDay()); // day of the week 0-6 (0 is sunday)
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log("UTC Time");
console.log(dt.getUTCFullYear());
console.log(dt.getUTCMonth());
console.log(dt.getUTCDate());
console.log(dt.getUTCDay());
console.log(dt.getUTCHours());
console.log(dt.getUTCMinutes());
console.log(dt.getUTCSeconds());
console.log(dt.getTimezoneOffset()/60); // offset in minute normally it is in minutes so we divide it by 60 to get the hour difference

console.log("----------------------------------------------");

console.log("We can manipulate the date.");
date.setFullYear(2023);
console.log(date,"manipulated year");
console.log(date.getTime()); // gives time in millisecond, can be used to take the month,year and more.

console.log("<--------------------------------------------------->");

date = new Date();
console.log(date.toISOString());
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());

