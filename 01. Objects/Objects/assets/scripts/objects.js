"use strict";

let person = {
    name: "Ephraim",
    age: 30,
    hobbies: ["Sports", "Coding"],

    deleteThis: "yes",

    greet: function () {
        console.log(`Hi there!`);
    },
};
console.log(person);
person.greet();

// Adding property
person.isAdmin = true;

// Modifying property
person.age = 38;

// Deleting property
delete person.deleteThis;
console.log(person);
