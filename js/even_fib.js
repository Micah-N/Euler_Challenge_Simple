//Micah Netz
/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
var result = 0;
var first = 1;
var second = 2;
var third = 0;

while ( first <= 4000000){
  if (first % 2 === 0){
	  result += first;
  }
  third = first + second;
  first = second;
  second = third;
}

console.log("The sum result of the even-valued fibonnaci numbers from 0 to 4,000,000 is: " + result);
document.getElementById('even_fib').innerHTML = result;