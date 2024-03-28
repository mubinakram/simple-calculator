#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstnumber"},
    {message: "enter second number", type: "number", name: "secondnumber"},
    {
    message:"Select one of the operaters to perform the operation",
    type: "list",
    name:"operater",
    choices : ["addition", "subtraction", "multiplication", "division" ],
},


]);

// condition
if (answer.operater === "addition") {
    console.log( answer.firstnumber + answer.secondnumber);
}else if (answer.operater === "subtraction") {
    console.log( answer.firstnumber - answer.secondnumber);
}
else if (answer.operater === "multiplication") {
    console.log( answer.firstnumber * answer.secondnumber);
}
else if  (answer.operater === "division") {
    console.log( answer.firstnumber / answer.secondnumber);
} else {
    console.log("Please select valid operator")
}
