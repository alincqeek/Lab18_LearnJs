// let age = 20;
// let name = "Alina";
// let isStudent = true;
// console.log("Name ", name);
// console.log("Age", age);
// console.log("Is student: ", isStudent);


// let userName="Алексей";
// console.log(`Привет, ${userName}!`);

// let price = 99.99;
// let temperature = -15;
// let infinity = 1 / 0;
// let notANumber = 0 / 0;
// console.log(0.1 + 0.2);

// let bigNumber = 9007199254740991n;
// let huge = BigInt("123456789012345678901234567890");

// let isAlive = true;
// let isWorking = false;
// let isAdult = age >= 18;

// let x;
// let y = undefined;

// let userData = null;

// let id = Symbol("id");

// let person = {
//   name: "Станислав",
//   age: 30,
//   isStudent: false,
//   sayHello: function () {
//     console.log("Привет!");
//   },
// };

// console.log(person.name);

// let fruits = ["яблоко", "банан", "апельсин"];
// let numbers = [1, 2, 3, 4, 5];
// let mixed = ["тест", 42, true, null];

// function sum(a, b) {
//   return a + b;
// }

// let multiply = function (x, y) {
//   return x * y;
// };

// console.log(sum(5, 3));

// let now = new Date();
// let birthday = new Date("1995-12-17");

// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// console.log(10 + "5");
// console.log("10" - 5);

// const numbersArray = [1, 2, 3];

// numbersArray[0] = 10;
// console.log(numbersArray);

// persons.age = 50;
// persons.city = "Volgograd";
// console.log(persons);

// person={name: "Stas"};
// let newPrice =9;
// console.log(newPrice, typeof(newPrice));
// newPrice="Артурка";
// let num = 42;
// let str = String(num);
// let str2 = num.toString();
// let str3 = "" + num;

// let strNum = "123";
// let int = Number(strNum);
// let int2 = parseInt("42.5");
// let float = parseFloat("3.14");
// let int3 = "+99";

// let bool1 = Boolean(1);
// let bool2 = !!1;
// let bool3 = Boolean(0);
// let bool4 = Boolean("");

// console.log("5" + 3);
// console.log("5" - 3);
// console.log("5" * "2");
// console.log(true + 1);
// console.log(false + 1);
// console.log(null + 1);
// console.log(undefined + 1);

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 == obj2);
console.log(obj1 == null);

let obj3 = obj1;
console.log(obj1 == obj3);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 == arr2);