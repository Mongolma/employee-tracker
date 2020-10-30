/* Seeds for SQL table */
USE employeeDB;

/* Add employee*/
-- INSERT INTO  employeeDB (first_name, last_name , role_id, manager_id)
-- VALUES ("Dorj", "Bat", 4, 1);

/* or alter */
ALTER TABLE employeeDB
ADD (first_name, last_name , role_id, manager_id) 
DEFAULT default_value;
