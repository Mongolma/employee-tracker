/* Schema for SQL database/table */
-- DROP DATABASE IF EXISTS roleDB;

/* Create database */
CREATE DATABASE roleDB;
USE roleDB;

/* Create new table for role with a primary key that auto-increments, and a text field */
 CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(6.2),
    department_id INT,
    PRIMARY KEY (id)
 );
