"use strict";

let person = {
    "first name": "Ephraim",
    age: 30,
    hobbies: ["Sports", "Coding"],

    deleteThis: "yes",

    greet: function () {
        console.log(`Hi there!`);
    },

    //     Number as property type
    1.5: "Hello",
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

// Name key
const nameKey = "first name";

// Accessing property with square bracket
// console.log(person["first name"]);
console.log(person[nameKey]);

const movieList = document.getElementById("movie-list");
movieList.style["background-color"] = "red";
movieList.style.display = "block";

console.log(person[1.5]);

// Sorted property order
console.log(person);
