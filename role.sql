-- /* Schema for SQL database/table */
DROP DATABASE IF EXISTS roleDB;

-- /* Create database */
CREATE DATABASE roleDB;
USE roleDB;

/* Create new table for role with a primary key that auto-increments, and a text field */
 CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(7,2),
    department_id INT,
    PRIMARY KEY (id)
 );

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 200.000, 1),("Salesperson",80.000, 2),("Lead Engineer",150.000, 3),("Software Engineer",130.000, 4),("Accountant",80.000, 5),("Legal team lead",150.000, 6),("Lawyeer",100.000, 7);
