SELECT employeeDB.id, employeeDB.first_name, employeeDB.last_name, employeeDB.manager_id, departmentDb.name, roleDB.salary, roleDB.title

FROM mytable

INNER JOIN view all employees
    ON employeeDB.id = departmentDb.id = roleDB.id
ORDER BY column, … ASC/DESC
