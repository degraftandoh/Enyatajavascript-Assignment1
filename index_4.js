const fullName = "Benjamin De-graft-Andoh";

const names = fullName.split(" ");
const firstName = names[0];
const lastName = names[1];

const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

const reversedLastName = lastName.split("").reverse().join("");

const fullNameLength = fullName.length;

const containsLetterA = fullName.toLowerCase().includes("a");

console.log(`First Name: ${capitalizedFirstName}`);
console.log(`Reversed Last Name: ${reversedLastName}`);
console.log(`Full Name Length: ${fullNameLength}`);
console.log(`Contains letter 'a': ${containsLetterA}`);
