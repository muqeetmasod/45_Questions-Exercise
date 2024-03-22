/*
Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.
 */

let secondperson: string = "Muqeet Masood";
//to upper case
console.log(secondperson.toUpperCase());
//to lower case
console.log(secondperson.toLowerCase());
//to upper and title case
console.log(
  secondperson.charAt(0).toUpperCase() + secondperson.slice(1).toLowerCase()
);
