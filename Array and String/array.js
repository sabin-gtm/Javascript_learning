let str = "Sabin";
let str2 = 'Sabin';
let str3 = `Sabin`;
console.log(str,str2,str3);

let firstName = "Sabin";
let lastName = "Gautam";

let fullName = firstName + " " + lastName;
console.log(fullName);

let fullName2 =`${firstName} ${lastName}`;
console.log(fullName2);

console.log(`My name is ${fullName}.`); // `....` ->Template literal, ${} -> placeholder, method is called string interpolation.


//constructor method to create string.

let str4 = new String("sabin");
console.log(str4);

str5 = "Hello,..\nHow are\t\t\tyou ?"; // /n and /t are single character things.
console.log(str5,str5.length);

str6 = 'hello world';

// Strings are immutable, original strings cannot be changed anyhow.

for (let ch of str6){
    console.log(ch);
}

for(let ch in str6){
    console.log(ch);
}

let str7 = "";
for(let ch of str){
    str7= str7 + ch +" ";
}
console.log(str7);


//methods in string 

let str8 = "hELlo";
let strcpy8;
strcpy8=str8.toUpperCase();
console.log(strcpy8);

let str9 ="HelLO";
let strcpy9 =str9.toLowerCase();
console.log(strcpy9);

let str10 = "I am a boy.";
let check = str10.includes("boy");
console.log(check);
console.log(str10.indexOf("a")); //-1 output is not matched 
console.log(str10.charAt(2));  // exactly opposite of indexOf
console.log(str10.replace("boy","girl")); // replaces only one time. Use replaceAll() for all replacing

let username1 = "@SabinGautam99";
console.log(username1.slice(4,6)); //This supports negative index. 
console.log(username1.substring(4,6));//This does not supports negative index. 
console.log(str10.split(""));

let str11 ="I am a boy";
str11 = "I am not a girl.";
console.log(str11);
let str12 = "I am a boy";
str12 = str12.replace("boy","girl");
console.log(str12);

//Question 1

// let fn = prompt("enter your  full name.");
// let un = `@${fn.trim().replaceAll(" ","")}_${fn.length}`;
// console.log(un);

// //Question 2

// let str13 = prompt("Enter a String");
// let ch01 = prompt("Enter a character");
// let count=0;
// for(index in str13){
//     if (str13[index].toLowerCase() === ch01.toLowerCase()){
//         count++;
//         console.log("index:"+index);
//     }
// }
// console.log(`Total ${count} ${ch01} in String ${str13}`);

//Question 3
let str14 = "Hello! How are you ?";
console.log(str14.replaceAll(" ","").length);

let arr= new Array(2,3,4,"sabin");
let carr= new Array(10);
console.log(arr);
console.log(carr);

let arr1 = [4,5 ,"Apple","SAbin",23];
console.log(arr1);

console.log(arr1.length);
console.log(typeof arr);

//Arrays are mutable means can be modified into same array unlike immutable strings.

let arr2=[1,3,5,7,9,78];
console.log(arr2[0]);
console.log(arr2[5]);

arr2[2]=99;
console.log(arr2[2]);

let arr3 =[1,2,3,4,5,6,7,8,9]

for (i=0; i<arr3.length; i++){
    console.log(arr3[i]*2);
}

for (let em of arr3){
    console.log(em);
}

for (let ep in arr3){
    console.log(ep);
}

let arr5=[2,5,6,"Sabin",7,9];
console.log(arr5);

let al = arr5.push(999);
console.log(al, arr5);

al = arr5.pop();
console.log(al, arr5);

al = arr5.unshift(3);
console.log(al, arr5);

al = arr5.shift();
console.log(al, arr5);

let sliced = arr5.slice(1, 4)
console.log(sliced);
console.log(arr5);

arr5=[2,5,6,"Sabin",7,9];
let spliced = arr5.splice(2, 2, "ADD"," SUB");
console.log(spliced);
console.log(arr5);

let arr6=[2,3];
let arr7=[7,8];
let arr8 = [],array=arr8.concat(arr6,arr7);
console.log(array);

//spread opearator 
let newArr=[...arr6,...arr7];
console.log(newArr);

let fruit=["mango","apple","banana","pineapple","mango"];
let test = fruit.join(" & ");
console.log(fruit);
console.log(test, typeof test);

let bool=fruit.includes("apple");
console.log(bool);
bool=fruit.includes("strawberry");
console.log(bool);

let str15 = fruit.toString();
console.log(fruit);
console.log(str15);

console.log(fruit.indexOf("mango"));

fruit.reverse();
console.log(fruit);

let test2 = fruit.find((item)=>{
    return item === "mango";
})
console.log(test2);

let heroes = ["spiderman",[[["hulk"],"thor"],["batman"]]];
console.log(heroes.flat(2));
console.log(heroes.flat());
console.log(heroes.flat(Infinity));
console.log(heroes); 

let arr20 = [2,4,7,3,1,8,20];
let hearoes = ['spiderman','ironman','hulk','thor','superman','batman']
arr20.sort((a,b)=>{
    return a-b;
});
hearoes.sort();
console.log(arr20);
console.log(hearoes);

let arr21 = [1,25,45,50];

let nA = arr21.map((ele,index,arr)=>{
    console.log(ele,index,arr);
    return ele*2;
})
console.log(nA);

let nA2 = arr21.forEach((ele,index,arr)=>{
    console.log(ele*2);
    console.log(index);
    console.log(arr);
})
console.log(nA2);//cannot be gotten sth in new array by forEach

let FA = arr21.filter((elem, iindex, arr)=>{ //Only workss for true or false to return element if true.
    return elem%2===0;
})
console.log(arr21);
console.log(FA); //returns value to the new array old array stays unmodified

let RA = arr21.reduce((prev,curr)=>{ //works for single operation 
    return prev + curr; //execution to find result for each loop result is previous value is not defined initially it's first index
},10)// previous value(accumulator value) assigned current value is 1st index or index 0
console.log(arr21);
console.log(RA);

//qUESTION 1

let sa = [5, 10, 15];

let s_a = sa.reduce((previous,current)=>{
    return previous + current;
})

console.log(`Sum is ${s_a}`);

let avg = s_a/sa.length;
console.log(avg);

//Question 2

let n = 25;
let arr22 = new Array(n).fill(0);
console.log(arr22);

//Question 3

 n = 25;
arr22 = new Array(n).fill(0);
arr22.forEach((item, index)=>{
    arr22[index]= index+1;
})
console.log(arr22);

//QUESTION 4

arr22 = ["ironman","captain","black widow","wanda","hulk","black panther"];
arr22.push("spiderman");
arr22.unshift("thor");
console.log(arr22);

arr22.splice(3,1,"hawkweye");
console.log(arr22);
console.log(arr22.includes("captain"));

let  arr23 = 33;
console.log(Array.isArray(arr23));

//question 5

let test1 = "mkl";
let test_2 = 1234;
let test3 = {
    name:"sabin"
};
console.log(Array.isArray(test1));
console.log(Array.from(test1));
console.log(Array.from(test_2));//cannot be converted into array
console.log(Array.from(test3));//cannot be converted into array


//Question 6

let w=10,x="sabin",y={
    name:"sabin"
},z=[1,2,3,4,5]
console.log(Array.of(w,x,y,z));//joining multiple things to Array

//Question 7

let string = "sabin"
console.log(string);
let reverse = Array.from(string).reverse().join("");
console.log(reverse);
//if & else condition to check palindrome
//OR

let rev = string.split("").reverse().join("")
console.log(rev);
//if & else condition to check palindrome


//Question 8

let str16 = "hello my name is sabin gautam."
let str17 = str16.split(" ").map((elem)=>{
   return elem.charAt(0).toUpperCase()+elem.slice(1)
})
let str18 = str17.join(" ");
console.log(str18);

