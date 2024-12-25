function foo(a,b){
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Error: Input must be numbers";
  }
}
console.log(foo(1, "1")); //Output: Error: Input must be numbers

function foo2(a, b) {
  //Using parseInt
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, "1")); //Output: 2