/*
Datatype Assignments
===============================

1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.

2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables

3. Predict the Output
Without running the code, predict the output:
console.log(typeof 100); ->number
console.log(typeof "100");->string
console.log(typeof true);->boolean
console.log(typeof undefined);-->undefined
console.log(typeof null);-->object
console.log(typeof 100n);-->bigInt

Then execute the program and compare your answers.

4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.

5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?

=================================
*/
/*Answer
1. Identify the datatype
Create variables for the following values and identify their datatype:
*/
let a = 25;
let b = "JavaScript";
let c = true;
let d = undefined;
let e = null;
let f = 123.45;
let g = 12345678901234567890n;
let h = Symbol("id"); 

console.log(a + " is a: " + typeof(a));
console.log(b + " is a: " + typeof(b));
console.log(c + " is a: " + typeof(c));
console.log(d + " is a: " + typeof(d));
console.log(e + " is a: " + typeof(e));
console.log(f + " is a: " + typeof(f));
console.log(g + " is a: " + typeof(g));
console.log([h] , "is a: ", typeof(h));

/*
2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables
*/

//String
let str = "FName"; //String
let num = 911; //Number
let bool = false; //Boolean
let undef = undefined; //Undefined
let blank = null; //Null
let bigI = 9999999n; //BigInt
let sym = Symbol("testId"); //Symbol
let obj1 = { name:"Jimmy" }; //Object

console.log(str);
console.log(num);
console.log(bool);
console.log(undef);
console.log(blank);
console.log(bigI);
console.log([sym]);
console.log(obj1);
//console.log("Object" + " data type (property: name): " + obj1.name);

/*
3. Predict the Output
Without running the code, predict the output:
console.log(typeof 100); ->number
console.log(typeof "100");->string
console.log(typeof true);->boolean
console.log(typeof undefined);-->undefined
console.log(typeof null);-->object
console.log(typeof 100n);-->bigInt

Then execute the program and compare your answers.
*/

console.log(typeof 100); //number
console.log(typeof "100"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof 100n); //bigInt

/*
4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.
*/

let studentName = "Jimmy"; //string
let studentAge = 35; //number
let studentPercent = 70; //number
let completedCourse1 = true; //boolean
let courseGrade = "B"; //string

/*
5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?
*/

let userName;
let userEmail = null;

console.log("userName" + " data type: " + userName);
console.log("userEmail" + " data type: " + userEmail);

//1. What is the difference between undefined and null
/*
In JavaScript, undefined means the varibable is not initialized, while null is an assgined value
*/

//2. What does typeof userName return?
// Answer: undefined

//3. What does typeof userEmail return?
// Answer: null

//4. Why is typeof null considered unusual in JavaScript?
//It is considered unusual because null is a primitive data type but return typeof = object;