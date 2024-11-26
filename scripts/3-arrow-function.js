/*

Example of Memory Allocation

Debugger console: For Arrow Function's

*/

var y = 10;

function printY() {
    console.log(y);
}

var printY1 = function () {
    console.log(y);
};

var printY2 = () => {
    console.log(y);
};

var printY3 = () => console.log(y);

let printYLet = () => console.log(y);

const printYConst = () => console.log(y);
