//
// var name = 'jill'
// var secretsFunction = function() {
//   var pinCode = [0, 0 , 0 , 0 ,];
//   console.log('pincode inside secretsFunction', name);
// }
//
// secretsFunction();
//
// console.log('pincode outside secretsFunction', name);

// var filterNamesByFirstLetter = function(names, letter){
//   var filteredNames = [];
//   for (var name of names) {
//     if (name[0] === letter) {
//       filteredNames.push(name);
//     }
//   }
//
//
//   return filteredNames;
//
// }
//
// var students = ['Alice', 'Bob', 'Alyssia', 'Babs'];
// var filteredStudents = filterNamesByFirstLetter(students, 'A');
// console.log('filteredStudents:', filteredStudents);


// let temperature = 30;
//
//     if (temperature > 15) {
//       let jacket = false;
//       var happy = true;
//     } else {
//       let jacket = true;
//       var happy = false;
//     }

// console.log('jacket after if-else blocks:', jacket);
// console.log('happy after if-else blocks:', happy);

// let calculateEnergy = function(mass) {
//   const speedOfLight = 299792458;
//   return mass * speedOfLight **2;
// }
//
// let energyOfMe = calculateEnergy(75);
// console.log('energy of me if i have a mass of 75kg', energyOfMe);

const helloWorld = function(){
  result = "hello world";

}

helloWorld();

console.log('result outside of the function', result);
