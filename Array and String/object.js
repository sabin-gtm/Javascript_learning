let obj = {
  name: "Sanorita",
  age: "19",
  isMarriaged: false,
};
console.log(obj);

let car = {
  brand: "audi",
  color: "red",
  maxSpeed: 133,
  "full name": "Sabin gautam",
  stop: () => {
    console.log("Stopping The Car...");
    return "1";
  },
  start: function () {
    console.log("Starting The Car...");
    return "It will Start";
  },
};

console.log(car);

console.log(car.brand);
console.log(car.start());
console.log(car.stop());

console.log(car["brand"]);
car["start"]();

console.log(car["full name"]);

let obj1 = new Object({
  name: "Sabin Gautam",
  age: 19,
});

console.log(obj1);

obj1.name = "pagal";
console.log(obj1.name);

obj1.city = "Ktm";
console.log(obj1);

delete obj1.age;
console.log(obj1);

let obj2 = {
  name: "preeti lal kumar",
  greet: function () {
    console.log(`Hello! I'm ${this.name}`);
    console.log(this);
  },
};
obj2.greet();
// console.log(this); //hevy ram consumes so disabled

let keys = Object.keys(obj2);
console.log(keys);
let value = Object.values(obj2);
console.log(value);

for (let ch in obj2) {
  //cannot used for of loop
  console.log(ch);
  console.log(obj2[ch]);
}

let entries = Object.entries(obj2);
console.log(entries);

let obj3 = { ...obj2 };
console.log(obj3);

let obj4 = {};
Object.assign(obj4, obj3);
console.log(obj4);

let obj5 = {
  name: "alpha",
  age: "24",
};

Object.freeze(obj5); //Completely freezes

obj.city = "kanpur";
delete obj.name;
obj.name = "Sabin Gautam";

console.log(obj5);

let obj6 = obj5;
console.log(obj6);
Object.seal(obj6); //Same but you can change existing property.
obj6.name = "sabin";
console.log(obj6);

console.log(obj6.hasOwnProperty("age")); //Ask if something present or not.
console.log(obj6.hasOwnProperty("car")); //Ask if something present or not.

let obj7 = {
  name: "mkl",
  city: "bgp",
  age: 30,
};

let { city, age, name } = obj7; //name/keys matters
console.log(name, city, age);

let arr = [1, "Sabin", 10, "30", false];

let [item1, item2, a, b] = arr; //postion matters can be done as [,,a,,]
console.log(item1, item2, a, b);

//Question 1

let person = {
  name: "Sabin Gautam",
  age: 20,
  city: "Kathmandu",
};
console.log(person);

person.email = "example@gmail.com";
delete person.city;

for (let key in person) {
  console.log(`Value of ${key} is ${person[key]}`);
}

//QUESTION 2

let obj8 = {
  firstName: "Sabin",
  lastName: "Gautam",
};

let fullname = (param) => {
  return `Full name is:${param.firstName} ${param.lastName}`;
};

let fullName = fullname(obj8);
console.log(fullName);

//Question 3

object = {
  name: "asdfghj",
  age: 34567,
  city: "vhj",
  village: "sdfghj",
};

let keys1 = Object.keys(object).length;
console.log(keys1);

//Question 4

let array = [
  { name: "asd", role: "admin" },
  { name: "sdfty", role: "user" },
  { name: "ihoih", role: "admin" },
  { name: "igfcxh", role: "staff" },
];

function fa(array) {
  let filt = array.filter((item) => {
    return item.role === "admin";
  });

  let ra = filt.map((item) => {
    return item.name;
  });

  return ra;
}
let ra = fa(array);

console.log(ra);

//QUESTION 5

const products = [
  { id: 1, name: "iphone17" },
  { id: 2, name: "Samsung galaxy" },
  { id: 3, name: "Xiome" },
];

//QUESTION 6

function search(products, searchKeyword) {
  let filteredArray = products.filter((obj) => {
    return obj.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });
  console.log(filteredArray);
}
search(products, "17");

//Questi0n 7

const comments = [
  { pid: 1, cmt: "Great Post" },
  { pid: 2, cmt: "Wow! So Beautiful" },
  { pid: 1, cmt: "Good Job." },
];

function groupedByPost(comments) {
  let groupedComments = {};

  comments.forEach((obj) => {
    if (groupedComments.hasOwnProperty(obj.pid)) {
      groupedComments[obj.pid].push(obj.cmt);
    } else {
      groupedComments[obj.pid] = [obj.cmt];
    }
  });
  console.log(groupedComments);
}
groupedByPost(comments);

//Question 8

const param = { search: "laptop", page: 2, sprt: "price" };

function createUrl(params) {
  let url = "";
  for (let key in params) {
    url = url + `${key}=${params[key]}&`;
  }
  let finalUrl = url.slice(0, url.length - 1);
  console.log(finalUrl);
}
createUrl(param);