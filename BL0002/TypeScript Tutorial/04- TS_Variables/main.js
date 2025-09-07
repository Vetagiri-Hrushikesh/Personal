// Declare Type and value in single statement
var userName = "John";
console.log(userName);
var age1 = 20;
// Declare Type Without Value
var day;
console.log('Sunday');
// Declare Value Without Type
var city = "New York";
console.log(city);
// Variable Declaration Keywods
function global() {
    var globVar = "Global Variable";
}
global();
// Block -level scope
var count = 1;
if (count % 2 == 0) {
    var message = "Number is Even";
    console.log(message);
}
// Const
var country = "India";
console.log(country);
// Type Annotations
var myName = "Arjun";
var height = 5.2;
var isActive = true;
function greetUser(name, age) {
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
var greeting = greetUser(myName, height);
console.log(greeting);
// Variable Scopes in TypeScript
function localScope() {
    var localVar = "I am local";
    console.log(localVar);
}
// Global Scope
var globalVar = 10;
function displayGlobalVar() {
    console.log(globalVar);
}
displayGlobalVar();
// Class Scope
var Day = /** @class */ (function () {
    function Day() {
        this.day = "Monday";
    }
    Day.prototype.displayDay = function () {
        console.log(this.day);
    };
    return Day;
}());
var month = new Day();
month.displayDay();
function age() {
    var age = 10;
    console.log(age);
    var age = 20;
    console.log(age);
}
age();
