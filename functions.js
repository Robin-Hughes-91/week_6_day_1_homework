//
// // named function declaration
// function sayHello(name){
//   return `hello ${name}`;
//
// }
//
// console.log('sayHello message:', sayHello("Danielle"));
//
//
// //anonymous function expression
//
// var add = function(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }
//
// console.log('Result of  add with 1 and 3 =', add(1,3));


// 1. Declare a *named* function that takes an array of numbers,
// and returns the sum, or total, of all of the numbers in the array.
//
// 2. Define an *anonymous* function expression that takes two arguments:
//   - an object, for example, `{ name: 'Wojtek', age: 30 }`
//   - a string, for exmaple, `'name'`
//
//   Your function should return `true` if the given string is a `key`
//   on the given object and `false` if the object does not have a key
//   that matches the string. Store this function in an appropriately
//   named variable to invoke it.

  // var numbers = [1, 2, 3, 4, 5];
  //
  // function sumNumbers(numbers){
  //   var total = 0
  //   for (var number of numbers){
  //     total += number;
  //   }
  //   return total;
  // }
  //
  // var sum = sumNumbers(numbers);
  // console.log(sum);

  var objectHasKey = function(object, searchString) {
    for (var key in object){
      if (key === searchString){
        return true;
      }

    }
    return false;

  }

  var person = {
    name: 'Wojtek',
    age: 30
  }

  console.log(objectHasKey(person, 'age'));

  //Arrow functions
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log('2 times 4 is', multiply(2, 4));
