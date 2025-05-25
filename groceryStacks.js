// Stack implementation using array
let groceryStack = [];

// Function to check the top item of the stack
function peek() {
    if (groceryStack.length === 0) {
        console.log("The stack is empty.");
        return null;
    } else {
        let topItem = groceryStack[groceryStack.length - 1];
        console.log("Top of the stack (peek):", topItem);
        return topItem;
    }
}

// Function to push/add an item to the stack
function push(item) {
    groceryStack.push(item); // Add item to the end (top)
    console.log(`"${item}" has been added to the stack.`);
    peek(); // Call peek after pushing
    printStack();
}

// Function to pop/remove the top item from the stack
function pop() {
    if (groceryStack.length === 0) {
        console.log("Cannot pop. The stack is already empty.");
        return;
    }
    let removedItem = groceryStack.pop(); // Remove last item
    console.log(`"${removedItem}" has been removed from the stack.`);
    peek(); // Call peek after popping
    printStack();
}

// Function to print current stack items
function printStack() {
    console.log("Current Stack:", groceryStack);
   

// Ask user to input 5 grocery items using prompt
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    push(item); // Add the input item to the stack
}

// Optional: Test pop
// pop(); // You can uncomment this line to test removing an item
