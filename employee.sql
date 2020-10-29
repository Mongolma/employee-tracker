/* Schema for SQL database/table */
-- DROP DATABASE IF EXISTS employeeDB;

/* Create database */
CREATE DATABASE employeeDB;
USE employeeDB;

/* Create new table for employee with a primary key that auto-increments, and a text field */
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,  
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);
