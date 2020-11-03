USE employeesDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rachel", "May", 1, 1),("Ernest", "Gagaryn", 2, 1), ("Lady", "Bug", 3, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 200.000, 1),("Salesperson",80.000, 2),("Lead Engineer",150.000, 3),("Software Engineer",130.000, 4),("Accountant",80.000, 5),("Legal team lead",150.000, 6),("manager",120.000, 7),("Lawyeer",100.000, 8);

INSERT INTO department (name)
VALUES ("Sales department"),("Engineer department"),("management"),("Accountanting department"),("Legal department");