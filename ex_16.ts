/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
//invitation
let dinnerinvite: string[] = ["ali", "ahmed", "zaid"];

for (let x = 0; x < dinnerinvite.length; x++) {
  console.log(`Mr ${dinnerinvite[x]}! you are invited to dinner at my place`);
}

//more guests
console.log("I found a big table for dinner\n");
dinnerinvite.unshift("arslan");
dinnerinvite.splice(2, 0, "muqeet");
dinnerinvite.push("soban");

for (let x = 0; x < dinnerinvite.length; x++) {
  console.log(dinnerinvite[x], " : you are now invited to dinner");
}
