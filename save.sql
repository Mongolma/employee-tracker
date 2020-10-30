/* Seeds for SQL table */
USE employeeDB;

/* Add employee*/
-- INSERT INTO  employeeDB (first_name, last_name , role_id, manager_id)
-- VALUES ("Dorj", "Bat", 4, 1);

/* or alter */
ALTER TABLE employeeDB
ADD (first_name, last_name , role_id, manager_id) 
DEFAULT default_value;

DELETE FROM employeeDB;
/* when remove employee request activated it has to display list of employee & once the employee who needs to removed picked by their name it has to be removed */
SELECT 
WHERE first_name, last_name

/* or */
ALTER TABLE employeeDB;
/* selected by their first name and last name */
DROP column_to_be_deleted;

/* after update employee manager selected, questions will displayed: Which employee's manager do you want to update? after that which employee do you want to set as manager for the selected employee? */