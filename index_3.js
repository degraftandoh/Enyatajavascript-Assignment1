let principal = 1000;
let interestRate = 0.05;
let timePeriod = 2;

let compoundInterest = principal * Math.pow(1 + interestRate, timePeriod);

compoundInterest = compoundInterest.toFixed(2);

console.log(`Compound Interest: $${compoundInterest}`);

interestRate -= 0.01;

let newCompoundInterest = principal * Math.pow(1 + interestRate, timePeriod);

let difference = newCompoundInterest - compoundInterest;

console.log(`New Compound Interest: $${newCompoundInterest.toFixed(2)}, Difference: $${difference.toFixed(2)}`);

let compoundInterestString = compoundInterest.toString();

let cents = compoundInterestString.slice(-2);

console.log(`Cents in Compound Interest: ${cents}`);

let totalAmount = principal + parseFloat(compoundInterest);

console.log(`Total Amount: $${totalAmount.toLocaleString()}`);
