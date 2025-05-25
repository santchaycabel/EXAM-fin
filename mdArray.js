// Use prompt() to get input from the user
// For browser testing, use prompt. In Node.js, a different method is needed.

let names = prompt("Enter name:");
let ages = prompt("Enter age:");

// Convert the string input into an array using split()
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

// Create a new array with the format [name, age]
let restructuredArray = [];

for (let i = 0; i < subArray1.length; i++) {
    restructuredArray.push([subArray1[i], subArray2[i]]);
}

// Log each [name, age] pair to the console
console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(pair => {
    console.log(pair);
});
