"use strict";
let theName = "Elzero";
let theAge = 40;
let hire = true;
let all;
theName = "shaimaa";
all = 100;
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));
console.log(typeof add(10, 20));
let all2 = "osama";
all2 = "A";
all2 = 100;
all2 = true;
let myFriends = ["osama", "Ahmed", "Sayed"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
let arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary} , Test Variable ${test}`;
    }
    return `Nothing here ! Go to play football `;
}
console.log(showDetails("Osama", 40, 5000));
function showData(name, age = 60, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("Osama", 40));
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAll(10, 20, 30, 10.5, +true));
//# sourceMappingURL=index.js.map