// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var map1= numbers.map(x => x * 100 );
console.log(map1);

function x100(num){return num * 100;}
var map2= numbers.map(x100);
console.log(map2);