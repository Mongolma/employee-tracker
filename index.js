//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
let deptArr = [];
let roleArr = [];
let emplArr = [];
let managerArr = [];
//Create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 3306,

  // Username
  user: "root",

  // Password
  password: "",
  database: "employeesDB",
});

connection.connect(function (err) {
  if (err) throw err;
  promptUser();
});

//Questions
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
      "Exit",
    ],
  },
];

function promptUser() {
  inquirer.prompt(questions).then((res) => {
    switch (res.optionForStart) {
      case "View All Employees":
        viewAllEmployees();
        break;
      case "View All Employees By Manager":
        viewAllEmployeeByManager();
        break;
      case "View All Employees By Department":
        viewAllEmployeesByDepartment();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Remove Employee":
        removeEmployee();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      case "Update Manager Role":
        updateManagerRole();
        break;
      case "Exit":
        connection.end();
        break;
      default:
        connection.end();
    }
  });

  // getDept();
  // getRole();
  // getManager();
  function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      connection.end();
      promptUser();
    });
  }

  function addEmployee() {
    connection.query("SELECT * FROM role ORDER BY title", function (err, res) {
      if (err) throw err;
      const roleChoices = res.map(({ id, title }) => ({
        value: id,
        name: `${title}`,
      }));

      // connection.query("SELECT * FROM employee", function (err, res1) {
      //   if (err) throw err;

      inquirer
        .prompt([
          {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?",
            // validate: function (value) {
            //   if (value === "") {
            //     return false;
            //   } else {
            //     return true;
            //   }
            // },
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?",
            // validate: function (value) {
            //   if (value === "") {
            //     return false;
            //   } else {
            //     return true;
            //   }
            // },
          },
          {
            type: "list",
            name: "role",
            message: "What is the role of the new employee?",
            choices: roleChoices,
          },
          // {
          //   type: "list",
          //   name: "manager",
          //   message: "Who is the employeer's manager?",
          //   choices: ["name", "name", "name", "name"],
          // },
        ])
        .then((answers) => {
          // console.log(roleChoices[i]);
          // let managerId;
          // for (let i = 0; i < res1.length; i++) {
          //   if (res1[i].last_name == answers.manager) {
          //     managerId = res1[i].employee_id;
          //   }
          // }
          connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answers.firstName,
              last_name: answers.lastName,
              role_id: answers.role,
              // manager_id: managerId,
            },
            function (err) {
              if (err) throw new Error(err);

              console.log("Employee added succesfully.");

              promptUser();
            }
          );
        });
      //});
    });
  }

  // function addEmployee() {
  //   connection.query("SELECT * FROM department", function (err, res) {
  //     if (err) {

  //     }
  //   });
  //
  // {
  //   type: "list",
  //   name: "role",
  //   message: "What is the role?",
  //   choices: [
  //     "Sales lead",
  //     "Sales person",
  //     "Lead engineer",
  //     "Software engineer",
  //     "Account manager",
  //     "Account",
  //     "Legal team members",
  //   ],
  // },
  //
  // {
  //   type: "list",
  //   name: "remove_employee",
  //   message: "Which employeer do you need to remove?",
  //   choices: ["name", "name", "name", "name"],
  // },
  // {
  //   type: "list",
  //   name: "role_update",
  //   message: "Which employee's manager do you want to update?",
  //   choices: ["name", "name", "name", "name"],
  // },
  // {
  //   type: "list",
  //   name: "update_manager",
  //   message:
  //     "Which employee's do you want set as manager for the selected employee?",
  //   choices: ["name", "name", "name", "name"],
  // }// [
  //   "Sales lead",
  //   "Sales person",
  //   "Lead engineer",
  //   "Software engineer",
  //   "Account manager",
  //   "Account",
  //   "Legal team members",
  // ],
  // {
  //   type: "list",
  //   name: "department",
  //   message: "What is the department of the new employee?",
  //   choices: [
  //     "Sales department",
  //     "Engineering department",
  //     "Financial department",
  //     "Legal team",
  //   ],
  // },
  //
}
console.clear();
// viewAllEmployees();
