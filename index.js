//Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");

//Questions
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  const questions = [
    {
      type: "checkbox",
      name: "start",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "View All Employees",
        "Remove Employee",
        "Update Employee Role",
        "Update Manager Role",
      ],
    },
  ];
  return inquirer.prompt(questions);
}
console.clear();
promptUser();
