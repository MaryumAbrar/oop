#! /usr/bin/env node

import inquirer from "inquirer";
import person from "./person.js";
import student from "./student.js";

console.log("Type 1 if you like to talk to others type 2 if you rather keep it to yourself");

let input = await inquirer.prompt({
  name: "answer",
  type: "number",
  message: "Answer 1 or 2: ",
});

let MyPerson = new person();
MyPerson.askQuestion(input.answer);
console.log("You are: ", MyPerson.getPersonality());

let newInput = await inquirer.prompt({
  name: "answer",
  type: "input",
  message: "Enter your name: ",
});

let MyStudent = new student();

MyStudent.set(newInput.answer);

console.log("Your name is: ", MyStudent.get(), " and your personality is: ", MyStudent.getPersonality());