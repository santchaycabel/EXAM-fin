// Declaring two variables
let name1 = prompt("Enter the first name: ");
let name2 = prompt("Enter the second name: ");

function reverseName(name) {
  return name.split('').reverse().join('');
}

// Reverse the names
let reversedName1 = reverseName(name1);
let reversedName2 = reverseName(name2);

// Console 
console.log("Original Name1:", name1);
console.log("Reversed Name1:", reversedName1);
console.log("Is palindrome?", name1 === reversedName1); //Check the truth values

console.log("Original Name2:", name2);
console.log("Reversed Name2:", reversedName2);
console.log("Is palindrome?", name2 === reversedName2); //Check the false values
