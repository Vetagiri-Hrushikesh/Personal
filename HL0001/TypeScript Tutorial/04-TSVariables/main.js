/**
 * TYPESCRIPT VARIABLES TUTORIAL
 * =============================
 *
 * This file demonstrates different ways to declare variables in TypeScript,
 * including type annotations, variable scoping, and declaration keywords.
 */
// ===========================================
// TYPES OF VARIABLE DECLARATIONS
// ===========================================
// 1. Declare Type and Value in a Single Statement
// This is the most explicit way - you specify both the type and initial value
var userName = 'Amit'; // userName is explicitly typed as string
var age = 25; // age is explicitly typed as number and cannot be reassigned
// 2. Declare Type Without Value (Type Annotation Only)
// You can declare a variable with a type but without an initial value
var city; // city is typed as string but has no initial value
// console.log(city);              // This would log 'undefined' since no value was assigned
// Note: TypeScript will warn about using uninitialized variables
city = "Mumbai"; // Now assign a value
console.log(city); // Output: Mumbai
// 3. Declare Value Without Type (Type Inference)
// TypeScript can automatically infer the type from the assigned value
var country = 'India'; // TypeScript infers country as type 'string'
console.log(country); // Output: India
// ===========================================
// VARIABLE DECLARATION KEYWORDS IN TYPESCRIPT
// ===========================================
// 1. var - Function Scoped (Legacy, avoid in modern TypeScript)
// var declarations are function-scoped and can be redeclared
function testVar() {
    var globalVar = 'I am a function scoped variable';
    console.log(globalVar);
    // var variables are hoisted and can be redeclared
    var globalVar = 'I can be redeclared'; // This is allowed with var
    console.log(globalVar);
}
testVar();
// 2. let - Block Scoped (Recommended for variables that change)
// let declarations are block-scoped and cannot be redeclared in the same scope
var count = 5;
if (count > 0) {
    var message = "Count is positive"; // message is only accessible within this block
    console.log(message); // Output: Count is positive
}
// console.log(message);  // Error: message is not accessible here (block scope)
// 3. const - Block Scoped and Immutable (Recommended for constants)
// const declarations are block-scoped and cannot be reassigned
var countryName = "India";
// countryName = "USA";  // Error: Cannot assign to 'countryName' because it is a constant
console.log(countryName); // Output: India
// ===========================================
// TYPE ANNOTATIONS IN TYPESCRIPT
// ===========================================
// Type annotations explicitly specify the type of a variable
var userName1 = "Arjun"; // Explicitly typed as string
var age1 = 25; // Explicitly typed as number
var isActive = true; // Explicitly typed as boolean
// Function with type annotations for parameters and return type
function greetUser(name, age) {
    // Parameters 'name' and 'age' are typed, return type is string
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
// Call the function with typed parameters
var greeting = greetUser(userName1, age1);
console.log(greeting); // Output: Hello, Arjun! You are 25 years old.
// ===========================================
// VARIABLE SCOPES IN TYPESCRIPT
// ===========================================
// 1. Local Scope - Variables declared inside a function
// Local variables are only accessible within the function where they are declared
function testLocalScope() {
    var localVar = "I am local"; // localVar is only accessible within this function
    console.log(localVar); // Output: I am local
}
// console.log(localVar);  // Error: localVar is not defined outside the function
// 2. Global Scope - Variables declared outside any function or block
// Global variables are accessible from anywhere in the program
var globalVar = 10; // globalVar is accessible throughout the entire program
function displayGlobalVar() {
    console.log(globalVar); // Can access globalVar from inside the function
}
displayGlobalVar(); // Output: 10
// 3. Class Scope - Variables declared within a class
// Class properties are accessible within the class methods using 'this'
var Employee = /** @class */ (function () {
    function Employee() {
        this.salary = 50000; // Class property with type annotation
    }
    Employee.prototype.printSalary = function () {
        // 'this.salary' refers to the class property
        console.log("Salary: ".concat(this.salary));
    };
    return Employee;
}());
// Create an instance of the Employee class
var emp = new Employee();
emp.printSalary(); // Output: Salary: 50000
// ===========================================
// COMPREHENSIVE EXAMPLE: UNDERSTANDING VARIABLE SCOPES
// ===========================================
// Global variable - accessible from anywhere in the program
var globalVar1 = 10;
// Class with different types of variables
var Geeks = /** @class */ (function () {
    function Geeks() {
        // Private class property - only accessible within this class
        this.classVar = 11;
    }
    // Public method that demonstrates local scope
    Geeks.prototype.assignNum = function () {
        // Local variable - only accessible within this method
        var localVar = 12;
        console.log('Local Variable: ' + localVar); // Output: Local Variable: 12
        // Can access class property using 'this'
        console.log('Class Variable: ' + this.classVar); // Output: Class Variable: 11
        // Can access global variable directly
        console.log('Global Variable from method: ' + globalVar1); // Output: Global Variable from method: 10
    };
    return Geeks;
}());
// Access global variable from outside any function/class
console.log('Global Variable: ' + globalVar1); // Output: Global Variable: 10
// Create an instance of the Geeks class and call its method
var obj = new Geeks();
obj.assignNum();
// Note: We cannot access classVar directly from outside the class because it's private
// console.log(obj.classVar);  // This would cause a TypeScript error
