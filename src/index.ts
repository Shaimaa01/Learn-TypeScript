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