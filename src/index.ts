// console.log(Math.floor(10));

let theName: string = "Elzero";
let theAge: number = 40;
let hire: boolean = true;
let all: any;

theName = "shaimaa";
all = 100;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));

// Type Annotations With Arrays

let all2: string | number | boolean = "osama"

all2 = "A";
all2 = 100;
all2 = true;

let myFriends:string[] = ["osama" , "Ahmed" , "Sayed" ];

for(let i=0; i<myFriends.length; i++){
    console.log(myFriends[i].repeat(3));
}

// Type Annotations With Multidimensional Arrays

 let arrayFour:(string | number | string[] | boolean)[] = [1,2,3,4, "A" , "B" , ["C" , "D"], true , false];

 /*
  Type  Annotations With Functions 

    noImplicitAny

    noImplicitReturns 
      Will chek All code Paths In AFunction To Ensure They Return A Value

    noUnsedLocals
      Report Errors On Unused Local Variables

    noUnusedParameters
      Report Errors On Unused Parameters In Functions.
 */

let showMsg = true;

function showDetails(name: string,age: number,salary: number) : string{
  let test = 10;
  if(showMsg){
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary} , Test Variable ${test}`;
  }

  return `Nothing here ! Go to play football `
}

console.log(showDetails("Osama" , 40 , 5000));

/*
Function 
  Optional and Defalut Parameters

  In JavaScript , Every Parameter Is Optional => "undefined" If You Didn`t Use It 
  "?" Optional Parameter
*/

function showData(name?: string ,age: number= 60, country?: string){
  return `${name} - ${age} - ${country}`
}

console.log(showData("Osama" , 40 ));

/*
  Function
    Rest Parameter
    What About Float => All Is Under Type Number
*/

function addAll(...nums:number[]) : number{
let result = 0;
// for(let i =0; i < nums.length; i++){
//   result += nums[i];
// }

nums.forEach((num) => result += num);

return result;
}

console.log(addAll(10,20,30,10.5, +true));

/*
  Function
  Anonymous Function
  Arrow Function
*/

const addTwo = function(num1:number, num2:number): number{
  return num1 + num2;
}

console.log(addTwo(10,20));

const addWithArrow = (num1:number , num2:number) : number => num1 + num2 ;

console.log(addWithArrow(10,20));