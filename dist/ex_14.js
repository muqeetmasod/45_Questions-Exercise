"use strict";
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//invitation
let dinnerinvite = ["ali", "ahmed", "zaid"];
for (let x = 0; x < dinnerinvite.length; x++) {
    console.log(`Mr ${dinnerinvite[x]}! you are invited to dinner at my place`);
}
//invitation with map
dinnerinvite.map((c) => {
    console.log(`Mr ${c}! you are invited to dinner at my place`);
});
