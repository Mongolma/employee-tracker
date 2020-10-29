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
      type: "list",
      name: "optionForStart",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Manager Role",
      ],
    },
    {
      type: "input",
      name: "firstName",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "role",
      message: "What is the role?",
      choices: [
        "Sales lead",
        "Sales person",
        "Lead engineer",
        "Software engineer",
        "Account manager",
        "Account",
        "Legal team members",
      ],
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the employeer's manager?",
      choices: ["none", "name", "name", "name"],
    },
    {
      type: "list",
      name: "removeEmployee",
      message: "Which employeer do you need to remove?",
      choices: ["name", "name", "name", "name"],
    },
    {
      type: "list",
      name: "roleUpdate",
      message: "Which employee's manager do you want to update?",
      choices: ["name", "name", "name", "name"],
    },
    {
      type: "list",
      name: "updateManager",
      message:
        "Which employee's do you want set as manager for the selected employee?",
      choices: ["name", "name", "name", "name"],
    },
  ];
  return inquirer.prompt(questions);
}
console.clear();
promptUser();

//General questions
