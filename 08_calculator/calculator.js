const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(ar) {
	return ar.reduce((total, current) => total + current, 0)
};

const multiply = function(ar) {
  return ar.reduce((val, current) => val * current)
};

const power = function(a, b) {
	return Math.pow(a ,b);
};

const factorial = function(n) {
	if (n ===0) return 1;
  let total = 1
  for (let i = n; i >0; i--){
    total *= i;
  }
  return total;
};

const recursiveFactorial = function (n){
  if (n === 0) {return 1;}
  return n * recursiveFactorial(n - 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
