// Declare Type and value in single statement
let userName: string = "John";
console.log(userName);
let age1:number = 20;


// Declare Type Without Value
let day:string;
console.log('Sunday');

// Declare Value Without Type
let city = "New York";
console.log(city);

// Variable Declaration Keywods
function global(){
    var globVar = "Global Variable";
}
global();


// Block -level scope

let count = 1;
if (count% 2 ==0) {
  let message = "Number is Even";
  console.log(message); 
}


// Const
const country = "India";
console.log(country);


// Type Annotations
let myName: string = "Arjun";  
let height: number = 5.2;            
let isActive: boolean = true;    

function greetUser(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

let greeting = greetUser(myName, height);
console.log(greeting);


// Variable Scopes in TypeScript

function localScope() {
    let localVar = "I am local";
    console.log(localVar);
}


// Global Scope
let globalVar = 10;  
function displayGlobalVar() {
  console.log(globalVar); 
}
displayGlobalVar();

// Class Scope
class Day{
    day: string = "Monday";
    displayDay(){
        console.log(this.day);
    }
}
const month=new Day();
month.displayDay();

