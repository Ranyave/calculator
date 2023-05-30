let num1 = "";
let num2 = "";
let operator = "";

function operate(num1, operator, num2){
  if(operator === "+"){
    return add(num1, num2);

  } else if( operator == "-"){
    return subtract(num1, num2);
  }else if (operator == "*"){
    return multiply(num1, num2);
  }else if(operator == "/"){
    return divide(num1, num2);
  }else {
    return "broken :P"
  }
}


const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum
};

const subtract = function(a, b) {
	let sum = a - b;
  return sum;
};


const multiply = function(a, b){
  let result = a * b;
  return result;
}

const divide = function(a, b){
  let result = a / b;
  return result;
}
/*const sum = function(sum1) {
  let result = sum1.reduce((sum, current) => sum + current, 0);
 return result;
};

const multiply = function(multi) {
  let result = 0;
  multi.forEach(function(item, index, array) {
    // ... do something with item
    if(result == 0){
      result = item;
    }else {
      result = result * item;
    } 

  });
 return result;
};*/

const power = function(a, b) {
  let result = a;
  for(let i = 1; i < b; i++){
    result = result * a;
  }
 
 return result;
};