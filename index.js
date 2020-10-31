//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
  employeeTracker();
});

function employeeTracker() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

{
  /* <script>
console.table([{name: 'foo'}, {name: 'bar'}]);
</script>  */
}

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
  inquirer.prompt(questions).then(function (res) {
    console.log(res);
    switch (res.action) {
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
        exit();
        break;
    }
  });

  // {
  //   type: "input",
  //   name: "first_name",
  //   message: "What is the employee's first name?",
  // },
  // {
  //   type: "input",
  //   name: "last_name",
  //   message: "What is the employee's last name?",
  // },
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
  // {
  //   type: "list",
  //   name: "manager",
  //   message: "Who is the employeer's manager?",
  //   choices: ["none", "name", "name", "name"],
  // },
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
  // }
}
console.clear();
promptUser();

<script src="bower_components/console.table/dist/console.table.js"></script>;
