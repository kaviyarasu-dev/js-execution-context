/*

1. Execution Context
2. There are 2 phases of Execution Context
    1. Memory Component, 
    2. Code Component
3. Every function has it's own Call Stack
4. Once function execution completed, Call Stack popped up from top to bottom & memory freed up

*/

var n = 5;

function square(n) {
    var ans = n * n;
    return ans;
}

var square1 = square(n); // function invoked
var square2 = square(8);

console.log(square1);
console.log(square2);