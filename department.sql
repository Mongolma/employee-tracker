/* Schema for SQL database/table */
-- DROP DATABASE IF EXISTS departmentDB;

/* Create database */
-- CREATE DATABASE departmentDB;
USE departmentDB;

 /* Create new table for role with a primary key that auto-increments, and a text field */
--  CREATE TABLE department (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(30), 
--     PRIMARY KEY (id)
--   );

INSERT INTO department (name)
VALUES ("Sales Lead"),("Salesperson"),("Lead Engineer"),("Software Engineer"),("Accountant"),("Legal team lead"),("Lawyeer"),("Lead Engineer");