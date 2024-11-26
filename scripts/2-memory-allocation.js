/*

Example of Memory Allocation

1. After assignment: x = 5, printX()
2. Before assignment: x, printX()
3. If x is not defined: x, printX()
4. Debugger console: Undefined Variable, Function, Not Defined Variable

*/

printX()
console.log(x);
console.log(printX);

var x = 5;
function printX() {
    console.log(x);
}

printX();
console.log(x);


