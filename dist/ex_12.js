"use strict";
/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//array of friends with message
let myfriends = ["ali", "ahmed", "zaid", "hassan"];
for (let x = 0; x < myfriends.length; x++) {
    console.log(myfriends[x], " : Assalamualikum bro how are you?");
}
