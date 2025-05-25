let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge two arrays
let combine = numbers.concat(names); 

// Sort numbers (numerically)
let arrange = [numbers].sort((a, b) => a - b); 

// Sort names (alphabetically)
let arrangeNames = [names].sort();

console.log("Combined:", combine);
console.log("Sorted Numbers:", arrange);
console.log("Sorted Names:", arrangeNames);

//REFERENCE: https://www.w3schools.com/js/js_arrays.asp
